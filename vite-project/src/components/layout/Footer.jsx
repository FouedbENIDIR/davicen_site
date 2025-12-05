const currentYear = new Date().getFullYear();
import { useLanguage, useTranslation } from '../../i18n/LanguageContext';

function Footer() {
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <footer className="mt-16 py-8 px-6 bg-neutral border-t-2 border-gray-300">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-6 text-center text-gray-600">
        <p className="font-medium" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          {t.footer.copyright.replace('{year}', currentYear)}
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:contact@davicen.com"
            className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r transition-all duration-500 font-medium relative group"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            contact@davicen.com
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r transition-all duration-500 group-hover:w-full" style={{ backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r transition-all duration-500 font-medium relative group"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            LinkedIn
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r transition-all duration-500 group-hover:w-full" style={{ backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }} />
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r transition-all duration-500 font-medium relative group"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Behance
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r transition-all duration-500 group-hover:w-full" style={{ backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }} />
          </a>
        </div>
        
        {/* Language Switcher */}
        <div className="flex justify-center items-center gap-3 pt-4 border-t border-gray-300">
          <span className="text-xs font-medium text-gray-500" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            {t.footer.language}
          </span>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 hover:border-[#6C86FF] transition-all duration-300 hover:bg-gray-50 group"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            title={language === 'en' ? 'Switch to Français' : 'Switch to English'}
          >
            <span className="text-lg">
              {language === 'en' ? '🇬🇧' : '🇫🇷'}
            </span>
            <span className="text-xs font-medium text-gray-600 group-hover:text-[#6C86FF] transition-colors duration-300">
              {language === 'en' ? 'EN' : 'FR'}
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
