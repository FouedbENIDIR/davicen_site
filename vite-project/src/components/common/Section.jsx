import { useEffect, useRef, useState } from 'react';

export default function Section({ 
    id, 
    label, 
    title, 
    description, 
    children,
    className = "",
    bgColor = "bg-white"
  }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <section 
        ref={sectionRef}
        id={id} 
        className={`py-32 px-6 ${bgColor} scroll-mt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto">
          {(label || title || description) && (
            <div className={`mb-16 space-y-3 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0' : 'translate-y-8'
            }`}>
              {label && (
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {label}
                </span>
              )}
              {title && (
                <h2 className="text-5xl font-bold text-transparent bg-clip-text" style={{ fontFamily: "'Poppins', sans-serif", backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }}>{title}</h2>
              )}
              {description && (
                <p className="text-lg text-gray-700 max-w-2xl font-medium">{description}</p>
              )}
            </div>
          )}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0' : 'translate-y-8'
          }`}>
            {children}
          </div>
        </div>
      </section>
    );
  }