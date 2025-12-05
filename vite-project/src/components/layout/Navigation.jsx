import { useTranslation } from '../../i18n/LanguageContext';

export default function Navigation({ scrolled }) {
  const t = useTranslation();
  const navItems = [t.nav.services, t.nav.projects, t.nav.team, t.nav.contact];

  return (
    <nav className={`transition-all duration-500 ${
      scrolled ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
    } overflow-hidden`}>
      <div className="flex justify-center gap-8 pt-4 border-t border-gray-200">
        {navItems.map(item => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-gray-700 hover:text-gray-900 font-medium relative group transition-all duration-300"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r transition-all duration-300 group-hover:w-full" style={{ backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }} />
          </a>
        ))}
      </div>
    </nav>
  );
}
