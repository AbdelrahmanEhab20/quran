'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
    const { t, dir } = useLanguage();

    return (
        <section id="home" className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-24 lg:py-32 overflow-hidden" dir={dir}>


            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-16 sm:top-20 left-16 sm:left-20 w-20 h-20 sm:w-24 sm:h-24 border-4 border-green-300 rounded-full"></div>
                <div className="absolute top-32 sm:top-40 right-20 sm:right-24 w-16 h-16 sm:w-20 sm:h-20 border-4 border-emerald-300 rounded-full"></div>
                <div className="absolute bottom-20 sm:bottom-24 left-1/4 w-12 h-12 sm:w-16 sm:h-16 border-4 border-teal-300 rounded-full"></div>
                <div className="absolute bottom-32 sm:bottom-40 right-1/3 w-20 h-20 sm:w-28 sm:h-28 border-4 border-green-300 rounded-full"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                {/* Arabic Title */}
                <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-800 mb-4 sm:mb-6 leading-tight" dir="rtl">
                        {t.hero.arabicTitle}
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 leading-tight">
                        {t.hero.englishTitle}
                    </h2>
                </div>

                {/* Description */}
                <p className="text-xl sm:text-2xl md:text-3xl text-green-600 max-w-5xl mx-auto leading-relaxed mb-12 sm:mb-16 font-medium px-4">
                    {t.hero.description}
                </p>

                {/* Surah Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16 px-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-green-200 hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:border-green-300">
                        <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-3">{t.hero.verses}</div>
                        <div className="text-lg sm:text-xl font-semibold text-green-700 mb-2">{t.hero.versesLabel}</div>
                        <div className="text-sm sm:text-base text-green-600 font-medium">آيات</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-green-200 hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:border-green-300">
                        <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-3">{t.hero.medinan}</div>
                        <div className="text-lg sm:text-xl font-semibold text-green-700 mb-2">{t.hero.medinanLabel}</div>
                        <div className="text-sm sm:text-base text-green-600 font-medium">Revealed in Medina</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-green-200 hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:border-green-300 sm:col-span-2 lg:col-span-1">
                        <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-3">{t.hero.juz}</div>
                        <div className="text-lg sm:text-xl font-semibold text-green-700 mb-2">{t.hero.juzLabel}</div>
                        <div className="text-sm sm:text-base text-green-600 font-medium">أجزاء</div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                    <a
                        href="#surah"
                        className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl sm:rounded-3xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                        {t.hero.watchButton}
                    </a>
                    <a
                        href="#about"
                        className="w-full sm:w-auto bg-white/90 backdrop-blur-sm text-green-700 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl sm:rounded-3xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-green-200 hover:border-green-300 flex items-center justify-center gap-3"
                    >
                        {t.hero.learnButton}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
