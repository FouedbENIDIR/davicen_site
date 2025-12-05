import { useState, useEffect } from 'react';
import Button from '../common/Button';
import heroVideo from '../../assets/video_hero.mp4';
import { useTranslation } from '../../i18n/LanguageContext';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const t = useTranslation();

    useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black relative overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Cercle décoratif en arrière-plan */}
        <div className={`absolute top-0 right-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}></div>
  
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className={`text-white font-semibold tracking-widest uppercase text-sm mb-4 block transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            
          </span>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight text-white transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
             <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2ff)', fontFamily: "'Nunito Sans', sans-serif" }}>
              {t.hero.title}
            </span>
          </h1>
          <p className={`text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            {t.hero.description}
          </p>
          <div className={`flex gap-4 justify-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '200ms' }}>
            <Button href="#services" variant="primary">{t.buttons.expertise}</Button>
            <Button href="#contact" variant="secondary">{t.buttons.contact_us}</Button>
          </div>
        </div>
      </section>
    );
  }