export const audioConfig = {
    // MongoDB database (production)
    database: {
        surahAlBaqarah: '/api/audio/surah-al-baqarah'
    },

    // Fallback sources (if database fails)
    fallback: {
        surahAlBaqarah: 'https://server8.mp3quran.net/husary/002.mp3'
    }
};

// Current source - USING DATABASE BY DEFAULT
export const currentSource = 'database' as 'database' | 'fallback';

export const getAudioUrl = (surah: string) => {
    if (currentSource === 'database') {
        // Use relative URL to automatically use current host and port
        return audioConfig.database[surah as keyof typeof audioConfig.database];
    }

    // Fallback to external source
    return audioConfig.fallback[surah as keyof typeof audioConfig.fallback];
};
