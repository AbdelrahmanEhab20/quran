# 🗄️ MongoDB Audio Storage Setup

## 🎯 **What This Setup Provides:**

- **Secure audio storage** in MongoDB database
- **Hidden database credentials** using environment variables
- **API endpoint** to serve audio files: `/api/audio/surah-al-baqarah`
- **Fallback system** if database fails
- **Caching headers** for better performance

## 🚀 **Setup Steps:**

### **1. Create MongoDB Database:**
```bash
# Option A: MongoDB Atlas (Cloud - Recommended)
# Go to https://www.mongodb.com/atlas
# Create free cluster and get connection string

# Option B: Local MongoDB
# Install MongoDB locally
```

### **2. Set Environment Variables:**
Create a `.env.local` file in your project root:
```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net
DB_NAME=quran_app

# Example Atlas connection string:
# MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/quran_app?retryWrites=true&w=majority
```

### **3. Add Your Audio File:**
```bash
# Place your Surah Al-Baqarah MP3 file in:
audio-files/surah-al-baqarah.mp3
```

### **4. Upload Audio to MongoDB:**
```bash
npm run upload-audio
```

### **5. Test the Setup:**
```bash
npm run dev
# Visit: http://localhost:3000
# Audio should now load from your MongoDB database!
```

## 🔐 **Security Features:**

- **Environment variables** hide database credentials
- **API route** serves audio without exposing database structure
- **No hardcoded passwords** in source code
- **Database connection** is private and secure

## 📁 **File Structure:**
```
src/
├── config/
│   ├── database.ts          # MongoDB connection
│   └── audio.ts            # Audio source configuration
├── app/api/audio/
│   └── [surah]/route.ts    # API endpoint for audio
└── components/
    └── CustomAudioPlayer.tsx # Uses database audio

scripts/
└── upload-audio.js         # Script to upload audio files

.env.local                  # Database credentials (not in Git)
```

## 🌐 **How It Works:**

1. **Audio stored** in MongoDB as binary data
2. **API endpoint** `/api/audio/surah-al-baqarah` serves the audio
3. **CustomAudioPlayer** fetches audio from your API
4. **Fallback system** uses external source if database fails
5. **Caching headers** improve performance

## 🎵 **Benefits:**

- ✅ **Your own database** - full control
- ✅ **Hidden credentials** - secure
- ✅ **Fast loading** - no external dependencies
- ✅ **Scalable** - easy to add more surahs
- ✅ **Professional** - production-ready setup

## 🚨 **Important Notes:**

- **Never commit** `.env.local` to Git
- **Add `.env.local`** to your `.gitignore`
- **Use strong passwords** for database
- **Backup your database** regularly
- **Monitor storage usage** (audio files can be large)

## 🔧 **Troubleshooting:**

### **Audio not loading?**
- Check MongoDB connection string
- Verify audio file was uploaded
- Check browser console for errors
- Ensure `.env.local` is in project root

### **Build errors?**
- Run `npm install` to get MongoDB dependency
- Check TypeScript compilation
- Verify API route syntax

### **Database connection failed?**
- Check internet connection
- Verify MongoDB Atlas IP whitelist
- Check username/password in connection string
