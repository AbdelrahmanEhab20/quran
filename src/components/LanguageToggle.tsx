'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-green-50 hover:bg-green-100 active:bg-green-200 text-green-700 font-semibold transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-green-200 hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 min-w-[120px] sm:min-w-[140px] touch-manipulation"
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
            <span className="font-arabic text-sm sm:text-base">
                {language === 'en' ? '🇸🇦 العربية' : '🇺🇸 English'}
            </span>
        </button>
    );
};

export default LanguageToggle;
