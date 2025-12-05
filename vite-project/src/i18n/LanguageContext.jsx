import { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Récupère la langue sauvegardée ou utilise l'anglais par défaut
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    // Sauvegarde la langue sélectionnée
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

export function useTranslation() {
  const { language, translations: trans } = useLanguage();
  return trans[language];
}
