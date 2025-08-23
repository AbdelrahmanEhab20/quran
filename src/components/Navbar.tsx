'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, dir } = useLanguage();

    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-xl border-b-4 border-green-600 sticky top-0 z-50" dir={dir}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-20 sm:h-24">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <div className="w-14 h-14 m-2 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 rounded-2xl flex items-center justify-center shadow-xl">
                            <Image src="/quran.png" alt="Quran Kareem Logo" width={40} height={40} />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-transparent mb-1">
                                {t.navbar.title}
                            </h1>
                            <p className="text-sm text-green-600 font-medium leading-tight">
                                {t.navbar.subtitle}
                            </p>
                        </div>
                        <div className="sm:hidden">
                            <h1 className="text-lg font-bold bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-transparent">
                                {t.navbar.title}
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10 justify-center space-x-8 xl:space-x-10">
                        <a href="#home" className="text-green-700 hover:text-green-900 font-semibold text-lg xl:text-xl transition-all duration-200 hover:scale-105 flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50">

                            {t.navbar.home}
                        </a>
                        <a href="#surah" className="text-green-700 hover:text-green-900 font-semibold text-lg xl:text-xl transition-all duration-200 hover:scale-105 flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50">

                            {t.navbar.surah}
                        </a>
                        <a href="#about" className="text-green-700 hover:text-green-900 font-semibold text-lg xl:text-xl transition-all duration-200 hover:scale-105 flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50">

                            {t.navbar.about}
                        </a>
                    </div>

                    {/* Language Toggle and Mobile Menu Button */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        {/* Language Toggle */}
                        <div className="hidden sm:block">
                            <LanguageToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-3 rounded-xl text-green-700 hover:bg-green-50 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMenuOpen ? (
                                <IoClose className="w-6 h-6" />
                            ) : (
                                <IoMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden py-6 border-t border-green-200 bg-white/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-300">
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#home"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-green-700 hover:text-green-900 font-semibold text-lg py-3 px-4 hover:bg-green-50 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-3"
                            >
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {t.navbar.home}
                            </a>
                            <a
                                href="#surah"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-green-700 hover:text-green-900 font-semibold text-lg py-3 px-4 hover:bg-green-50 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-3"
                            >
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {t.navbar.surah}
                            </a>
                            <a
                                href="#about"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-green-700 hover:text-green-900 font-semibold text-lg py-3 px-4 hover:bg-green-50 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-3"
                            >
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {t.navbar.about}
                            </a>
                            {/* Mobile Language Toggle */}
                            <div className="px-4 py-3 border-t border-green-100 pt-4">
                                <LanguageToggle />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
