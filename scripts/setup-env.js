#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Quran Audio Player environment...\n');

// Check if .env.local already exists
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    console.log('⚠️  .env.local already exists. Skipping creation.');
    console.log('📝 If you need to update it, edit the file manually.\n');
} else {
    // Create .env.local with default values
    const envContent = `# MongoDB Configuration
# For local development, use:
MONGODB_URI=mongodb://localhost:27017/quran
DB_NAME=quran

# For MongoDB Atlas, use this format instead:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/quran?retryWrites=true&w=majority
# DB_NAME=quran

# Note: If MongoDB is not available, the app will automatically fallback to external audio sources
`;

    try {
        fs.writeFileSync(envPath, envContent);
        console.log('✅ Created .env.local file with default MongoDB configuration');
        console.log('📝 Please edit .env.local and update the MongoDB connection details');
        console.log('🔗 For local development, make sure MongoDB is running on localhost:27017');
        console.log('🌐 For production, use MongoDB Atlas or your preferred MongoDB service\n');
    } catch (error) {
        console.error('❌ Failed to create .env.local:', error.message);
        console.log('📝 Please create .env.local manually with the following content:\n');
        console.log(envContent);
    }
}

console.log('📋 Next steps:');
console.log('1. Edit .env.local with your MongoDB connection details');
console.log('2. Run "npm run dev" to start the development server');
console.log('3. If MongoDB is not available, the app will use fallback audio sources');
console.log('4. Check the browser console for detailed audio loading logs\n');

console.log('🎵 The audio player will automatically:');
console.log('   - Try to load audio from MongoDB first');
console.log('   - Fallback to external sources if MongoDB fails');
console.log('   - Show detailed error messages and retry options');
console.log('   - Allow manual switching between sources\n');
