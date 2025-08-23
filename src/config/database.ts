import { MongoClient } from 'mongodb';

// Environment variables for database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'quran_app';
const AUDIO_COLLECTION = 'audio_files';

// MongoDB client
let client: MongoClient | null = null;

export const connectToDatabase = async () => {
    if (!client) {
        client = new MongoClient(MONGODB_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
};

export const getAudioCollection = async () => {
    const db = await connectToDatabase();
    return db.collection(AUDIO_COLLECTION);
};

export const closeDatabase = async () => {
    if (client) {
        await client.close();
        client = null;
    }
};
