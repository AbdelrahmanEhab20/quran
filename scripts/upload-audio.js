const { MongoClient, GridFSBucket } = require("mongodb");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: ".env.local" });

// Configuration
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const DB_NAME = process.env.DB_NAME || "quran_app";

async function uploadAudioToMongoDB() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(DB_NAME);
    const bucket = new GridFSBucket(db);

    // Audio file path
    const audioFilePath = path.join(
      __dirname,
      "../audio-files/surah-al-baqarah.mp3"
    );

    if (!fs.existsSync(audioFilePath)) {
      console.error(
        "Audio file not found. Please add your audio file to audio-files/ directory"
      );
      return;
    }

    // Get file stats
    const stats = fs.statSync(audioFilePath);
    console.log(`📁 File size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);

    // Check if file already exists
    const existingFiles = await bucket
      .find({ filename: "surah-al-baqarah.mp3" })
      .toArray();

    if (existingFiles.length > 0) {
      console.log("🗑️  Deleting existing file...");
      await bucket.delete(existingFiles[0]._id);
    }

    // Upload the file using promises
    console.log("📤 Uploading audio file to MongoDB...");

    const uploadPromise = new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(audioFilePath);
      const uploadStream = bucket.openUploadStream("surah-al-baqarah.mp3", {
        metadata: {
          surahName: "surah-al-baqarah",
          title: "Surah Al-Baqarah",
          reciter: "Sheikh Mahmoud Khalil Al-Hussary",
          duration: "3:19:17",
          language: "Arabic",
          uploadDate: new Date(),
          size: stats.size,
          mimeType: "audio/mpeg",
        },
      });

      uploadStream.on("error", reject);
      uploadStream.on("finish", () => resolve(uploadStream.id));

      readStream.pipe(uploadStream);
    });

    const fileId = await uploadPromise;
    console.log("✅ Audio file uploaded successfully!");
    console.log(`📊 File ID: ${fileId}`);
    console.log(`📁 Stored in GridFS collection`);
  } catch (error) {
    console.error("❌ Error uploading audio:", error);
  } finally {
    await client.close();
    console.log("🔌 MongoDB connection closed");
  }
}

// Run the upload
uploadAudioToMongoDB();
