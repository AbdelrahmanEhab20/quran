'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Footer = () => {
    const { t, dir } = useLanguage();

    return (
        <footer id="contact" className="bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 text-white" dir={dir}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                    {/* Brand Section */}
                    <div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                            <div className="text-center sm:text-left">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent mb-2">
                                    {t.footer.brand.title}
                                </h3>
                                <p className="text-base sm:text-lg lg:text-xl text-green-200">{t.footer.brand.subtitle}</p>
                            </div>
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl text-green-200 mb-8 max-w-lg mx-auto sm:mx-0 text-center sm:text-left leading-relaxed">
                            {t.footer.brand.description}
                        </p>
                        <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                <Image src="/quran.png" alt="Quran" width={50} height={50} />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-green-200">{t.footer.quickLinks.title}</h4>
                        <ul className="space-y-3 sm:space-y-4">
                            <li>
                                <a href="#home" className="text-green-300 hover:text-white transition-colors text-base sm:text-lg lg:text-xl hover:translate-x-2 transform duration-200 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    {t.footer.quickLinks.home}
                                </a>
                            </li>
                            <li>
                                <a href="#surah" className="text-green-300 hover:text-white transition-colors text-base sm:text-lg lg:text-xl hover:translate-x-2 transform duration-200 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    {t.footer.quickLinks.surah}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-green-300 hover:text-white transition-colors text-base sm:text-lg lg:text-xl hover:translate-x-2 transform duration-200 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    {t.footer.quickLinks.about}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-green-700 mt-12 sm:mt-16 pt-8 sm:pt-10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-base sm:text-lg lg:text-xl text-green-300 text-center md:text-left">
                            {t.footer.copyright}
                        </p>
                        <p className="text-base sm:text-lg lg:text-xl text-green-200 text-center font-arabic">
                            {t.footer.blessing}
                        </p>
                    </div>
                    <p className="text-center text-base sm:text-lg lg:text-xl text-green-200 mt-6">
                        {t.footer.blessingTranslation}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
