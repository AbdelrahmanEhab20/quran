# Quran Kareem - Surah Al-Baqarah

A beautiful, responsive website for watching and learning about Surah Al-Baqarah (The Cow) from the Holy Quran. Features an embedded YouTube video with beautiful recitation by Sheikh Mahmoud Khalil Al-Hussary.

## Features

- 🌍 **Bilingual Support**: Full Arabic and English language support with RTL/LTR layout
- 🎬 **Embedded Video**: High-quality YouTube video of Surah Al-Baqarah recitation
- 📱 **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- ♿ **Accessibility**: Proper ARIA labels and keyboard navigation
- 🌙 **Islamic Design**: Elegant Islamic-themed color scheme and typography

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: React Icons
- **Fonts**: Noto Naskh Arabic for Arabic text
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quran
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
quran/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx      # Root layout with language provider
│   │   ├── page.tsx        # Main page component
│   │   └── globals.css     # Global styles
│   ├── components/          # React components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Footer.tsx      # Footer component
│   │   └── LanguageToggle.tsx # Language switcher
│   ├── contexts/            # React contexts
│   │   └── LanguageContext.tsx # Language management
│   └── data/               # Static data
│       └── languages.ts    # Bilingual content
├── public/                  # Static assets
│   ├── quran.png          # Quran logo
│   └── QuranImageForVideo.jpg # Background image
└── package.json            # Dependencies and scripts
```

## Language System

The website supports both Arabic (RTL) and English (LTR) languages:

- **Arabic**: Right-to-left layout with Noto Naskh Arabic font
- **English**: Left-to-right layout with system fonts
- **Automatic Detection**: Detects browser language preference
- **Persistent Storage**: Remembers user's language choice

## Customization

### Adding New Languages

1. Add language data to `src/data/languages.ts`
2. Implement all required translations
3. The system automatically supports the new language

### Changing the Video

Update the YouTube embed URL in `src/app/page.tsx`:

```tsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  // ... other props
/>
```

### Styling

- Main styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- RTL support is built-in with CSS custom properties

## Deployment

The project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Sheikh Mahmoud Khalil Al-Hussary for the beautiful recitation
- The Islamic community for inspiration and support
- Next.js and React teams for the excellent framework
