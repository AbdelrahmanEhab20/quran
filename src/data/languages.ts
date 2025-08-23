export interface LanguageData {
    navbar: {
        title: string;
        subtitle: string;
        home: string;
        surah: string;
        about: string;
        contact: string;
    };
    hero: {
        arabicTitle: string;
        englishTitle: string;
        description: string;
        verses: string;
        versesLabel: string;
        medinan: string;
        medinanLabel: string;
        juz: string;
        juzLabel: string;
        watchButton: string;
        learnButton: string;
    };
    videoSection: {
        title: string;
        subtitle: string;
        playButton: string;
        reciter: string;
        reciterArabic: string;
        features: {
            hdQuality: string;
            hdQualityDesc: string;
            perfectAudio: string;
            perfectAudioDesc: string;
            allDevices: string;
            allDevicesDesc: string;
        };
        videoInfo: {
            highQuality: string;
            arabicText: string;
            beautifulRecitation: string;
            reciterInfo: string;
        };
        aboutRecitation: {
            title: string;
            description: string;
            features: string[];
        };
    };
    about: {
        title: string;
        subtitle: string;
        aboutSurah: {
            title: string;
            description: string;
        };
        keyThemes: {
            title: string;
            themes: string[];
        };
    };
    footer: {
        brand: {
            title: string;
            subtitle: string;
            description: string;
        };
        quickLinks: {
            title: string;
            home: string;
            surah: string;
            about: string;
            contact: string;
        };
        contactInfo: {
            title: string;
            email: string;
            website: string;
            phone: string;
            availability: string;
        };
        copyright: string;
        blessing: string;
        blessingTranslation: string;
    };
    videoPlayer: {
        title: string;
        play: string;
        pause: string;
        skipForward: string;
        skipBackward: string;
        mute: string;
        unmute: string;
        volume: string;
        nowPlaying: string;
        readyToPlay: string;
        videoSource: string;
    };
}

export const languages: Record<string, LanguageData> = {
    en: {
        navbar: {
            title: "Quran Kareem",
            subtitle: "القرآن الكريم - Holy Quran Online",
            home: "Home",
            surah: "Surah",
            about: "About",
            contact: "Contact",
        },
        hero: {
            arabicTitle: "سورة البقرة",
            englishTitle: "Surah Al-Baqarah",
            description: "The second and longest chapter of the Holy Quran, consisting of 286 verses. This blessed chapter contains guidance for all of humanity and addresses various aspects of faith, law, and morality.",
            verses: "286",
            versesLabel: "Verses",
            medinan: "مدنية",
            medinanLabel: "Medinan",
            juz: "1-3",
            juzLabel: "Juz",
            watchButton: "🎬 Watch & Listen Now",
            learnButton: "📖 Learn More",
        },
        videoSection: {
            title: "Listen to Surah Al-Baqarah",
            subtitle: "Beautiful recitation by Sheikh Mahmoud Khalil Al Hussary with the Holy Quran image",
            playButton: "Play",
            reciter: "Sheikh Mahmoud Khalil Al Hussary",
            reciterArabic: "محمود خليل الحصري",
            features: {
                hdQuality: "HD Audio Quality",
                hdQualityDesc: "Crystal clear audio with perfect pronunciation",
                perfectAudio: "Perfect Recitation",
                perfectAudioDesc: "Professional recording with perfect Tajweed rules",
                allDevices: "All Devices",
                allDevicesDesc: "Works perfectly on desktop, tablet, and mobile",
            },
            videoInfo: {
                highQuality: "High Quality Audio",
                arabicText: "Perfect Arabic Pronunciation",
                beautifulRecitation: "Beautiful Recitation",
                reciterInfo: "Recited by Sheikh Mahmoud Khalil Al Hussary • Duration: Complete Surah • Available 24/7",
            },
            aboutRecitation: {
                title: "About This Recitation",
                description: "This beautiful recitation of Surah Al-Baqarah is performed by the renowned Sheikh Mahmoud Khalil Al Hussary, one of the most respected and beloved reciters of the Holy Quran. His distinctive voice and perfect pronunciation make this recitation a spiritual experience for listeners worldwide.",
                features: [
                    "High Quality Audio Recording",
                    "Perfect Tajweed Rules",
                    "Complete Surah (286 Verses)"
                ]
            }
        },
        about: {
            title: "About Surah Al-Baqarah",
            subtitle: "Learn about the significance and themes of this blessed chapter",
            aboutSurah: {
                title: "About the Surah",
                description: "Surah Al-Baqarah (The Cow) was revealed in Medina and is considered one of the most comprehensive chapters of the Quran. It covers various themes including faith, prayer, fasting, pilgrimage, and social justice.",
            },
            keyThemes: {
                title: "Key Themes",
                themes: [
                    "Monotheism and faith in Allah",
                    "The story of Prophet Ibrahim (AS)",
                    "Laws and regulations for Muslims",
                    "Stories of previous nations",
                    "Guidance for personal conduct",
                ],
            },
        },
        footer: {
            brand: {
                title: "Quran Kareem",
                subtitle: "القرآن الكريم - Holy Quran Online",
                description: "Providing access to the Holy Quran 24/7 with beautiful recitations, translations, and spiritual guidance for all Muslims worldwide.",
            },
            quickLinks: {
                title: "Quick Links",
                home: "🏠 Home",
                surah: "🎬 Surah",
                about: "📖 About",
                contact: "📞 Contact",
            },
            contactInfo: {
                title: "Contact Info",
                email: "info@qurankareem.com",
                website: "www.qurankareem.com",
                phone: "+1 (555) 123-4567",
                availability: "Available 24/7",
            },
            copyright: "© 2024 Quran Kareem. All rights reserved.",
            blessing: "بارك الله فيمن يقرأ ويستمع إلى كلامه",
            blessingTranslation: "May Allah bless all who recite and listen to His words.",
        },
        videoPlayer: {
            title: "Surah Al-Baqarah Audio",
            play: "Play",
            pause: "Pause",
            skipForward: "Skip 30 seconds forward",
            skipBackward: "Skip 30 seconds backward",
            mute: "Mute",
            unmute: "Unmute",
            volume: "Volume",
            nowPlaying: "Now Playing: Surah Al-Baqarah",
            readyToPlay: "Ready to play audio",
            videoSource: "Sheikh Mahmoud Khalil Al Hussary",
        },
    },
    ar: {
        navbar: {
            title: "القرآن الكريم",
            subtitle: "Holy Quran Online - القرآن الكريم",
            home: "الرئيسية",
            surah: "السورة",
            about: "حول",
            contact: "اتصل بنا",
        },
        hero: {
            arabicTitle: "سورة البقرة",
            englishTitle: "Surah Al-Baqarah",
            description: "ثاني وأطول سورة في القرآن الكريم، تتكون من 286 آية. هذه السورة المباركة تحتوي على هداية لجميع البشرية وتعالج جوانب مختلفة من الإيمان والقانون والأخلاق.",
            verses: "286",
            versesLabel: "آيات",
            medinan: "مدنية",
            medinanLabel: "مدنية",
            juz: "1-3",
            juzLabel: "أجزاء",
            watchButton: "🎬 استمع الآن",
            learnButton: "📖 اعرف المزيد",
        },
        videoSection: {
            title: "استمع إلى سورة البقرة",
            subtitle: "تلاوة جميلة للشيخ محمود خليل الحصري مع صورة القرآن الكريم",
            playButton: "تشغيل",
            reciter: "Sheikh Mahmoud Khalil Al Hussary",
            reciterArabic: "محمود خليل الحصري",
            features: {
                hdQuality: "جودة صوت عالية",
                hdQualityDesc: "صوت واضح مع نطق مثالي",
                perfectAudio: "تلاوة مثالية",
                perfectAudioDesc: "تسجيل احترافي مع قواعد تجويد مثالية",
                allDevices: "جميع الأجهزة",
                allDevicesDesc: "يعمل بشكل مثالي على الكمبيوتر والتابلت والجوال",
            },
            videoInfo: {
                highQuality: "صوت عالي الجودة",
                arabicText: "نطق عربي مثالي",
                beautifulRecitation: "تلاوة جميلة",
                reciterInfo: "تلاوة الشيخ محمود خليل الحصري • المدة: السورة كاملة • متاح 24/7",
            },
            aboutRecitation: {
                title: "حول هذه التلاوة",
                description: "هذه التلاوة الجميلة لسورة البقرة يؤديها الشيخ محمود خليل الحصري، أحد أكثر قراء القرآن الكريم احتراماً وحباً. صوته المميز ونطقه المثالي يجعلان هذه التلاوة تجربة روحية للمستمعين في جميع أنحاء العالم.",
                features: [
                    "تسجيل صوتي عالي الجودة",
                    "قواعد تجويد مثالية",
                    "السورة كاملة (286 آية)"
                ]
            }
        },
        about: {
            title: "حول سورة البقرة",
            subtitle: "تعرف على أهمية ومواضيع هذه السورة المباركة",
            aboutSurah: {
                title: "حول السورة",
                description: "سورة البقرة نزلت في المدينة وتعتبر من أكثر سور القرآن شمولية. تغطي مواضيع مختلفة تشمل الإيمان والصلاة والصيام والحج والعدالة الاجتماعية.",
            },
            keyThemes: {
                title: "المواضيع الرئيسية",
                themes: [
                    "التوحيد والإيمان بالله",
                    "قصة النبي إبراهيم عليه السلام",
                    "القوانين والأنظمة للمسلمين",
                    "قصص الأمم السابقة",
                    "هداية للسلوك الشخصي",
                ],
            },
        },
        footer: {
            brand: {
                title: "القرآن الكريم",
                subtitle: "Holy Quran Online - القرآن الكريم",
                description: "نوفر الوصول إلى القرآن الكريم 24/7 مع تلاوات جميلة وترجمات وإرشاد روحي لجميع المسلمين في العالم.",
            },
            quickLinks: {
                title: "روابط سريعة",
                home: "🏠 الرئيسية",
                surah: "🎬 السورة",
                about: "📖 حول",
                contact: "📞 اتصل بنا",
            },
            contactInfo: {
                title: "معلومات الاتصال",
                email: "info@qurankareem.com",
                website: "www.qurankareem.com",
                phone: "+1 (555) 123-4567",
                availability: "متاح 24/7",
            },
            copyright: "© 2024 القرآن الكريم. جميع الحقوق محفوظة.",
            blessing: "بارك الله فيمن يقرأ ويستمع إلى كلامه",
            blessingTranslation: "May Allah bless all who recite and listen to His words.",
        },
        videoPlayer: {
            title: "صوت سورة البقرة",
            play: "تشغيل",
            pause: "إيقاف مؤقت",
            skipForward: "تقدم 30 ثانية",
            skipBackward: "تراجع 30 ثانية",
            mute: "كتم الصوت",
            unmute: "إلغاء كتم الصوت",
            volume: "مستوى الصوت",
            nowPlaying: "يعمل الآن: سورة البقرة",
            readyToPlay: "جاهز لتشغيل الصوت",
            videoSource: "الشيخ محمود خليل الحصري",
        },
    },
};
