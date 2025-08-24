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

// Current source - USING FALLBACK BY DEFAULT (much simpler!)
export const currentSource = 'fallback' as 'database' | 'fallback';

export const getAudioUrl = (surah: string) => {
    try {
        // Use fallback source directly - no MongoDB complexity
        const fallbackUrl = audioConfig.fallback[surah as keyof typeof audioConfig.fallback];
        if (fallbackUrl) {
            return fallbackUrl;
        }

        // If no fallback URL found, return the default one
        return audioConfig.fallback.surahAlBaqarah;
    } catch (error) {
        console.error('Error getting audio URL:', error);
        // Return fallback URL as last resort
        return audioConfig.fallback.surahAlBaqarah;
    }
};
