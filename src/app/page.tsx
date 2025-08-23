'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-white" dir={dir}>
      <Navbar />
      <Hero />
      <VideoSection />

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16 sm:mb-20">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 mb-6 sm:mb-8 leading-tight">{t.about.title}</h3>
            <p className="text-xl sm:text-2xl text-green-600 max-w-4xl mx-auto px-4 leading-relaxed font-medium">{t.about.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* About the Surah */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-green-200">
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 sm:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-600 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-green-800 text-center sm:text-left">{t.about.aboutSurah.title}</h4>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-green-700 leading-relaxed text-center sm:text-left">
                {t.about.aboutSurah.description}
              </p>
            </div>

            {/* Key Themes */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-green-200">
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 sm:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 text-white flex items-center justify-center relative">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white rounded-sm transform rotate-45"></div>
                    <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-green-800 text-center sm:text-left">{t.about.keyThemes.title}</h4>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {t.about.keyThemes.themes.map((theme, index) => (
                  <li key={index} className="flex items-start space-x-3 sm:space-x-4 text-green-700 text-base sm:text-lg lg:text-xl">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="font-medium">{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
