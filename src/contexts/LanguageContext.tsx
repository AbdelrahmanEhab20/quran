'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { languages, LanguageData } from '@/data/languages';

interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
    t: LanguageData;
    dir: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<string>('ar');

    useEffect(() => {
        // Check if user has a saved language preference
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && languages[savedLanguage]) {
            setLanguageState(savedLanguage);
        } else {
            // Check browser language
            const browserLang = navigator.language.split('-')[0];
            if (languages[browserLang]) {
                setLanguageState(browserLang);
            }
        }
    }, []);

    const setLanguage = (lang: string) => {
        if (languages[lang]) {
            setLanguageState(lang);
            localStorage.setItem('language', lang);
            // Update document direction
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
        }
    };

    useEffect(() => {
        // Update document direction when language changes
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: languages[language],
        dir: language === 'ar' ? 'rtl' : 'ltr',
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
