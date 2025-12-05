import { useScroll } from '../../hooks/useScroll';
import Navigation from './Navigation';
import logoV2 from '../../assets/logo_v2.jpg';
import davicenV2 from '../../assets/davicen_v2.png';

export default function Header() {
  const scrolled = useScroll(100);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
          {/* Logo */}
          <div className={`flex items-center justify-center gap-3 transition-all duration-500 ${
            scrolled ? 'mb-0' : 'mb-6'
          }`}>
            {!scrolled ? (
              <img src={logoV2} alt="Davicen Logo" className={`transition-all duration-500 ${scrolled ? 'h-10' : 'h-16'}`} />
            ) : (
              <img src={davicenV2} alt="Davicen" className={`transition-all duration-500 ${scrolled ? 'h-10' : 'h-16'}`} />
            )}
          </div>
          
          {/* Navigation conditionnelle */}
          <Navigation scrolled={scrolled} />
        </div>
      </div>
    </header>
  );
}

