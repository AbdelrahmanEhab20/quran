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
        features: {
            hdQuality: string;
            hdQualityDesc: string;
            perfectAudio: string;
            perfectAudioDesc: string;
            allDevices: string;
            allDevicesDesc: string;
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
        copyright: string;
        blessing: string;
        blessingTranslation: string;
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
            title: "Watch Surah Al-Baqarah",
            subtitle: "Beautiful recitation by Sheikh Mahmoud Khalil Al Hussary with the Holy Quran",
            features: {
                hdQuality: "HD Video Quality",
                hdQualityDesc: "Crystal clear video with perfect audio",
                perfectAudio: "Perfect Recitation",
                perfectAudioDesc: "Professional recording with perfect Tajweed rules",
                allDevices: "All Devices",
                allDevicesDesc: "Works perfectly on desktop, tablet, and mobile",
            },
            aboutRecitation: {
                title: "About This Recitation",
                description: "This beautiful recitation of Surah Al-Baqarah is performed by the renowned Sheikh Mahmoud Khalil Al Hussary, one of the most respected and beloved reciters of the Holy Quran. His distinctive voice and perfect pronunciation make this recitation a spiritual experience for listeners worldwide.",
                features: [
                    "High Quality Video Recording",
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
            copyright: "© 2024 Quran Kareem. All rights reserved.",
            blessing: "بارك الله فيمن يقرأ ويستمع إلى كلامه",
            blessingTranslation: "May Allah bless all who recite and listen to His words.",
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
            title: "شاهد سورة البقرة",
            subtitle: "تلاوة جميلة للشيخ محمود خليل الحصري مع القرآن الكريم",
            features: {
                hdQuality: "جودة فيديو عالية",
                hdQualityDesc: "فيديو واضح مع صوت مثالي",
                perfectAudio: "تلاوة مثالية",
                perfectAudioDesc: "تسجيل احترافي مع قواعد تجويد مثالية",
                allDevices: "جميع الأجهزة",
                allDevicesDesc: "يعمل بشكل مثالي على الكمبيوتر والتابلت والجوال",
            },
            aboutRecitation: {
                title: "حول هذه التلاوة",
                description: "هذه التلاوة الجميلة لسورة البقرة يؤديها الشيخ محمود خليل الحصري، أحد أكثر قراء القرآن الكريم احتراماً وحباً. صوته المميز ونطقه المثالي يجعلان هذه التلاوة تجربة روحية للمستمعين في جميع أنحاء العالم.",
                features: [
                    "تسجيل فيديو عالي الجودة",
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
            copyright: "© 2024 القرآن الكريم. جميع الحقوق محفوظة.",
            blessing: "بارك الله فيمن يقرأ ويستمع إلى كلامه",
            blessingTranslation: "May Allah bless all who recite and listen to His words.",
        },
    },
};
