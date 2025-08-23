export const audioConfig = {
    // Local development (working now)
    local: {
        surahAlBaqarah: '/002.mp3'
    },

    // External hosting (for production)
    external: {
        // Google Drive (may not work)
        googleDrive: {
            surahAlBaqarah: 'https://drive.google.com/file/d/14lrbqZ47OyuU-LLgbMlfhts4rR4AoOAO/preview'
        },
        
        // Backup working audio
        backup: {
            surahAlBaqarah: 'https://www.w3schools.com/html/horse.mp3'
        },

        // Working test audio (for demo)
        test: {
            surahAlBaqarah: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav'
        }
    },

    // Current active source - USING EXTERNAL AUDIO FOR PRODUCTION
    currentSource: 'external' as 'local' | 'external',
    currentProvider: 'backup' as 'googleDrive' | 'test' | 'backup'
};

export const getAudioUrl = (surah: keyof typeof audioConfig.local) => {
    if (audioConfig.currentSource === 'local') {
        return audioConfig.local[surah];
    }

    // Use external source
    const provider = audioConfig.currentProvider as keyof typeof audioConfig.external;
    return audioConfig.external[provider][surah];
};
