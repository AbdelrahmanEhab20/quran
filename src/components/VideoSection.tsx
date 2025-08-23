'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import CustomAudioPlayer from './CustomAudioPlayer';

const VideoSection = () => {
    const { t, dir } = useLanguage();

    return (
        <section id="surah" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" dir={dir}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                {/* Section Header */}
                <div className="text-center mb-20 sm:mb-24">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 mb-6 sm:mb-8 leading-tight">
                        {t.videoSection.title}
                    </h3>
                    <p className="text-xl sm:text-2xl text-green-600 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                        {t.videoSection.subtitle}
                    </p>
                </div>

                {/* Custom Audio Player */}
                <div className="mb-24">
                    <CustomAudioPlayer />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-24 max-w-6xl mx-auto">
                    <div className="text-center p-8 sm:p-10 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-green-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-green-300">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-green-800 mb-4">{t.videoSection.features.hdQuality}</h4>
                        <p className="text-base sm:text-lg text-green-600 leading-relaxed">{t.videoSection.features.hdQualityDesc}</p>
                    </div>

                    <div className="text-center p-8 sm:p-10 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-green-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-green-300">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-green-800 mb-4">{t.videoSection.features.perfectAudio}</h4>
                        <p className="text-base sm:text-lg text-green-600 leading-relaxed">{t.videoSection.features.perfectAudioDesc}</p>
                    </div>

                    <div className="text-center p-8 sm:p-10 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-green-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-green-300 md:col-span-2 lg:col-span-1">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-green-800 mb-4">{t.videoSection.features.allDevices}</h4>
                        <p className="text-base sm:text-lg text-green-600 leading-relaxed">{t.videoSection.features.allDevicesDesc}</p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-24">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-green-200 shadow-xl">
                        <h4 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6">{t.videoSection.aboutRecitation.title}</h4>
                        <p className="text-lg sm:text-xl text-green-700 leading-relaxed max-w-5xl mx-auto px-4 mb-8">
                            {t.videoSection.aboutRecitation.description}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-green-600">
                            {t.videoSection.aboutRecitation.features.map((feature, index) => (
                                <span key={index} className="flex items-center space-x-3">
                                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></span>
                                    <span className="text-base sm:text-lg font-medium">{feature}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
