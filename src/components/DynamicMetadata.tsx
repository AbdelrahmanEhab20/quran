'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const DynamicMetadata = () => {
    const { t, language } = useLanguage();

    useEffect(() => {
        // Update document title
        if (language === 'ar') {
            document.title = 'القرآن الكريم - سورة البقرة | Quran Kareem - Surah Al-Baqarah';
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
        } else {
            document.title = 'Quran Kareem - Surah Al-Baqarah | القرآن الكريم - سورة البقرة';
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
        }

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            if (language === 'ar') {
                metaDescription.setAttribute('content', 'استمع وشاهد سورة البقرة من القرآن الكريم مع تلاوة جميلة للشيخ محمود خليل الحصري. متاح على مدار الساعة مع فيديو عالي الجودة وصوت واضح.');
            } else {
                metaDescription.setAttribute('content', 'Watch and listen to Surah Al-Baqarah (The Cow) from the Holy Quran with beautiful recitation by Sheikh Mahmoud Khalil Al-Hussary. Available 24/7 with HD video and crystal clear audio.');
            }
        }

        // Update Open Graph title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            if (language === 'ar') {
                ogTitle.setAttribute('content', 'القرآن الكريم - سورة البقرة');
            } else {
                ogTitle.setAttribute('content', 'Quran Kareem - Surah Al-Baqarah');
            }
        }

        // Update Open Graph description
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            if (language === 'ar') {
                ogDescription.setAttribute('content', 'استمع وشاهد سورة البقرة من القرآن الكريم مع تلاوة جميلة');
            } else {
                ogDescription.setAttribute('content', 'Watch and listen to Surah Al-Baqarah from the Holy Quran with beautiful video recitation');
            }
        }

        // Update Open Graph locale
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            if (language === 'ar') {
                ogLocale.setAttribute('content', 'ar_SA');
            } else {
                ogLocale.setAttribute('content', 'en_US');
            }
        }

        // Update keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            if (language === 'ar') {
                metaKeywords.setAttribute('content', 'القرآن الكريم, البقرة, سورة, إسلامي, فيديو, تلاوة, الشيخ محمود خليل الحصري, عربي, أونلاين, Quran Kareem');
            } else {
                metaKeywords.setAttribute('content', 'Quran Kareem, Al-Baqarah, Surah, Islamic, Video, Recitation, Sheikh Mahmoud Khalil Al-Hussary, Arabic, Online, القرآن الكريم');
            }
        }

    }, [language]);

    return null; // This component doesn't render anything
};

export default DynamicMetadata;
