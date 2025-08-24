#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });
const { MongoClient, GridFSBucket } = require('mongodb');

async function testMongoDB() {
    let client = null;
    
    try {
        console.log('🔗 Testing MongoDB connection...');
        console.log('📡 URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
        console.log('🗄️  DB Name:', process.env.DB_NAME ? 'Set' : 'Not set');
        
        if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
            console.error('❌ Missing environment variables');
            return;
        }
        
        client = new MongoClient(process.env.MONGODB_URI);
        console.log('🔌 Connecting to MongoDB...');
        
        await client.connect();
        console.log('✅ Connected to MongoDB successfully!');
        
        const db = client.db(process.env.DB_NAME);
        console.log('📊 Database:', db.databaseName);
        
        // List all collections
        const collections = await db.listCollections().toArray();
        console.log('📁 Collections:', collections.map(c => c.name));
        
        // Check GridFS bucket
        const bucket = new GridFSBucket(db);
        
        // List all files in GridFS
        const files = await bucket.find({}).toArray();
        console.log(`🎵 Found ${files.length} audio files in GridFS:`);
        
        files.forEach((file, index) => {
            console.log(`  ${index + 1}. ${file.filename} (${file.length} bytes)`);
            if (file.metadata) {
                console.log(`     Metadata:`, file.metadata);
            }
        });
        
        if (files.length === 0) {
            console.log('⚠️  No audio files found in GridFS');
            console.log('💡 You may need to upload audio files to your MongoDB database');
        }
        
    } catch (error) {
        console.error('❌ MongoDB test failed:', error.message);
        console.error('🔍 Full error:', error);
    } finally {
        if (client) {
            try {
                await client.close();
                console.log('🔒 MongoDB connection closed');
            } catch (closeError) {
                console.error('❌ Error closing connection:', closeError);
            }
        }
    }
}

testMongoDB();
