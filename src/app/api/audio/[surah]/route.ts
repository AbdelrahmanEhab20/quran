import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, GridFSBucket } from 'mongodb';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ surah: string }> }
) {
    const { surah } = await params;

    try {
        const client = new MongoClient(process.env.MONGODB_URI!);
        await client.connect();

        const db = client.db(process.env.DB_NAME || 'quran_app');
        const bucket = new GridFSBucket(db);

        // Find audio file by surahName in metadata (your file has metadata.surahName: "surah-al-baqarah")
        const files = await bucket.find({
            'metadata.surahName': 'surah-al-baqarah'
        }).toArray();

        if (files.length === 0) {
            console.log('No audio file found for surah:', surah);
            await client.close();
            return NextResponse.json(
                { error: 'Audio file not found' },
                { status: 404 }
            );
        }

        const file = files[0];
        console.log('Found audio file:', file.filename, 'Size:', file.length, 'Metadata:', file.metadata);

        // Create download stream
        const downloadStream = bucket.openDownloadStream(file._id);

        // Convert stream to buffer
        const chunks: Buffer[] = [];
        downloadStream.on('data', (chunk) => chunks.push(chunk));

        const audioData = await new Promise<Buffer>((resolve, reject) => {
            downloadStream.on('end', () => resolve(Buffer.concat(chunks)));
            downloadStream.on('error', reject);
        });

        await client.close();

        console.log('Audio data loaded successfully, size:', audioData.length);

        // Return audio data with proper headers using metadata
        return new NextResponse(new Uint8Array(audioData), {
            headers: {
                'Content-Type': file.metadata?.mimeType || 'audio/mpeg',
                'Content-Length': file.length?.toString() || '',
                'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
                'Accept-Ranges': 'bytes'
            }
        });

    } catch (error) {
        console.error('Error fetching audio:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
