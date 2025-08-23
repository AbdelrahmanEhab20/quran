# Language System Documentation

This folder contains the language system for the Quran Kareem website, supporting both Arabic (RTL) and English (LTR) languages.

## Files

### `languages.ts`
Contains all the text content in both languages, organized by component and section.

### Structure
The language data is organized hierarchically:
- `navbar` - Navigation menu items
- `hero` - Hero section content
- `videoSection` - Video player section
- `about` - About section content
- `footer` - Footer content
- `videoPlayer` - Video player controls and labels

## Usage

### In Components
```tsx
import { useLanguage } from '@/contexts/LanguageContext';

const MyComponent = () => {
  const { t, dir, language } = useLanguage();
  
  return (
    <div dir={dir}>
      <h1>{t.hero.title}</h1>
      <p>Current language: {language}</p>
    </div>
  );
};
```

### Language Context
The `useLanguage` hook provides:
- `t` - Translation object with all text content
- `dir` - Text direction ('rtl' for Arabic, 'ltr' for English)
- `language` - Current language code ('ar' or 'en')
- `setLanguage` - Function to change language

### Adding New Languages
To add a new language:

1. Add the language code to the `languages` object in `languages.ts`
2. Implement all required translations
3. The system will automatically detect and support the new language

### RTL Support
Arabic language automatically enables RTL (right-to-left) layout:
- Text direction changes to RTL
- Margins and positioning are automatically adjusted
- CSS classes handle RTL-specific styling

## Language Toggle
The language toggle button is located in the navbar and allows users to switch between Arabic and English. The selection is saved in localStorage and persists across sessions.
