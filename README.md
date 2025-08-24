# Quran Al-Kareem - Surah Al-Baqarah

A modern, responsive Quran application featuring Surah Al-Baqarah with high-quality audio streaming from MongoDB Atlas.

## 🚀 **Latest Deployment**
- **Last Updated**: December 2024
- **Status**: Production Ready with MongoDB Integration
- **Audio Source**: MongoDB Atlas (GridFS) - 182MB High Quality Audio
- **Live URL**: https://quran-kareem-surat-elbaqra.vercel.app/

A beautiful, responsive Next.js website featuring Surah Al-Baqarah (The Cow) with a full-featured audio player. Built with TypeScript, Tailwind CSS, and modern web technologies.

## 🌟 Features

- **Beautiful Design**: Modern, responsive design with Islamic aesthetic
- **Audio Player**: Full-featured audio player with controls
- **Surah Information**: Detailed information about Surah Al-Baqarah
- **24/7 Availability**: Always accessible online
- **Mobile Responsive**: Works perfectly on all devices
- **TypeScript**: Built with type safety
- **Tailwind CSS**: Modern, utility-first CSS framework
- **MongoDB Integration**: High-quality audio streaming from MongoDB Atlas

## 🎵 Audio Player Features

- **Play/Pause**: Full control over audio playback
- **Progress Bar**: Visual progress indicator with seek functionality
- **Volume Control**: Adjustable volume with mute option
- **Skip Controls**: 30-second forward/backward skip
- **Time Display**: Current time and total duration (3:19:17)
- **Auto-play Ready**: Prepared for user interaction
- **Error Handling**: Comprehensive error handling with retry functionality
- **Loading States**: Visual feedback during audio loading

## 🗄️ MongoDB Integration

- **Database**: MongoDB Atlas (Cloud)
- **Storage**: GridFS for large audio files (182MB)
- **Audio Quality**: High-quality MP3 (191,343,486 bytes)
- **Reciter**: Sheikh Mahmoud Khalil Al-Hussary
- **Duration**: 3 hours, 19 minutes, 17 seconds
- **Language**: Arabic

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB Atlas account

### Environment Variables

Create a `.env.local` file:
```bash
MONGODB_URI=your_mongodb_atlas_connection_string
DB_NAME=quran_app
```

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd quran
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/audio/[surah]/route.ts  # MongoDB audio API
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Main page
├── components/
│   ├── CustomAudioPlayer.tsx        # Audio player component
│   ├── Navbar.tsx                   # Navigation
│   ├── Hero.tsx                     # Hero section
│   ├── Footer.tsx                   # Footer
│   └── LanguageToggle.tsx           # Language switcher
├── config/
│   ├── audio.ts                     # Audio configuration
│   └── database.ts                  # Database connection
├── contexts/
│   └── LanguageContext.tsx          # Language management
└── data/
    └── languages.ts                 # Multi-language support
```

## 🎨 Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **MongoDB**: Database with GridFS for large files
- **React Hooks**: State management and side effects
- **HTML5 Audio API**: Audio playback functionality
- **React Icons**: Modern icon library

## 🌐 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need support, please open an issue on GitHub.

---

**Note**: This website is designed for educational and spiritual purposes. The audio content is sourced from high-quality recordings and is used in accordance with appropriate terms of service.

**May Allah bless all who recite and listen to His words.** ☪️
