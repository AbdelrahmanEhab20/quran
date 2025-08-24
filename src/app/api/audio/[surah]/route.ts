import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ surah: string }> }
) {
    try {
        const { surah } = await params;
        console.log('🎵 API Route: Audio request for surah:', surah);

        // Simple solution: redirect to the external audio URL
        const audioUrl = 'https://server8.mp3quran.net/husary/002.mp3';

        console.log('🔄 Redirecting to external audio source:', audioUrl);

        // Return the audio URL as JSON for the frontend to use
        return NextResponse.json({
            success: true,
            audioUrl: audioUrl,
            surah: surah,
            message: 'Audio URL retrieved successfully'
        });

    } catch (error) {
        console.error('❌ API Route Error:', error);
        return NextResponse.json(
            {
                error: 'Failed to get audio URL',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
