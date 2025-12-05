// Service icons as SVG components
const ServiceIcon = ({ icon }) => {
  const icons = {
    AI: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <defs>
          <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C86FF" />
            <stop offset="100%" stopColor="#ff9ff2" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="28" fill="none" stroke="url(#aiGrad)" strokeWidth="2" />
        <circle cx="32" cy="20" r="6" fill="url(#aiGrad)" />
        <circle cx="20" cy="40" r="5" fill="url(#aiGrad)" />
        <circle cx="44" cy="40" r="5" fill="url(#aiGrad)" />
        <line x1="32" y1="26" x2="23" y2="36" stroke="url(#aiGrad)" strokeWidth="2" />
        <line x1="32" y1="26" x2="41" y2="36" stroke="url(#aiGrad)" strokeWidth="2" />
        <line x1="25" y1="40" x2="39" y2="40" stroke="url(#aiGrad)" strokeWidth="2" />
      </svg>
    ),
    DL: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <defs>
          <linearGradient id="dlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C86FF" />
            <stop offset="100%" stopColor="#ff9ff2" />
          </linearGradient>
        </defs>
        {/* Neural network layers */}
        <circle cx="12" cy="20" r="4" fill="url(#dlGrad)" />
        <circle cx="12" cy="32" r="4" fill="url(#dlGrad)" />
        <circle cx="12" cy="44" r="4" fill="url(#dlGrad)" />
        <circle cx="32" cy="16" r="4" fill="url(#dlGrad)" />
        <circle cx="32" cy="32" r="4" fill="url(#dlGrad)" />
        <circle cx="32" cy="48" r="4" fill="url(#dlGrad)" />
        <circle cx="52" cy="24" r="4" fill="url(#dlGrad)" />
        <circle cx="52" cy="40" r="4" fill="url(#dlGrad)" />
        {/* Connections */}
        <g stroke="url(#dlGrad)" strokeWidth="1" opacity="0.6">
          <line x1="16" y1="20" x2="28" y2="16" />
          <line x1="16" y1="20" x2="28" y2="32" />
          <line x1="16" y1="32" x2="28" y2="16" />
          <line x1="16" y1="32" x2="28" y2="32" />
          <line x1="16" y1="32" x2="28" y2="48" />
          <line x1="16" y1="44" x2="28" y2="32" />
          <line x1="16" y1="44" x2="28" y2="48" />
          <line x1="36" y1="16" x2="48" y2="24" />
          <line x1="36" y1="32" x2="48" y2="24" />
          <line x1="36" y1="32" x2="48" y2="40" />
          <line x1="36" y1="48" x2="48" y2="40" />
        </g>
        {/* Eye symbol for vision */}
        <ellipse cx="52" cy="32" rx="8" ry="5" fill="none" stroke="url(#dlGrad)" strokeWidth="1.5" />
        <circle cx="52" cy="32" r="2" fill="url(#dlGrad)" />
      </svg>
    ),
    Agent: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <defs>
          <linearGradient id="agentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C86FF" />
            <stop offset="100%" stopColor="#ff9ff2" />
          </linearGradient>
        </defs>
        {/* Robot head */}
        <rect x="18" y="14" width="28" height="24" rx="4" fill="none" stroke="url(#agentGrad)" strokeWidth="2" />
        {/* Antenna */}
        <line x1="32" y1="14" x2="32" y2="6" stroke="url(#agentGrad)" strokeWidth="2" />
        <circle cx="32" cy="5" r="3" fill="url(#agentGrad)" />
        {/* Eyes */}
        <circle cx="26" cy="24" r="3" fill="url(#agentGrad)" />
        <circle cx="38" cy="24" r="3" fill="url(#agentGrad)" />
        {/* Mouth/speaker */}
        <rect x="24" y="31" width="16" height="3" rx="1" fill="url(#agentGrad)" />
        {/* Body */}
        <rect x="22" y="40" width="20" height="14" rx="3" fill="none" stroke="url(#agentGrad)" strokeWidth="2" />
        {/* Arms */}
        <line x1="22" y1="46" x2="14" y2="50" stroke="url(#agentGrad)" strokeWidth="2" strokeLinecap="round" />
        <line x1="42" y1="46" x2="50" y2="50" stroke="url(#agentGrad)" strokeWidth="2" strokeLinecap="round" />
        {/* Gears/processing indicator */}
        <circle cx="32" cy="47" r="4" fill="none" stroke="url(#agentGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
    // Fallback icons
    UX: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <defs>
          <linearGradient id="uxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C86FF" />
            <stop offset="100%" stopColor="#ff9ff2" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="24" fill="none" stroke="url(#uxGrad)" strokeWidth="2" />
        <path d="M24 28 L32 36 L40 28" fill="none" stroke="url(#uxGrad)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    UI: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <defs>
          <linearGradient id="uiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C86FF" />
            <stop offset="100%" stopColor="#ff9ff2" />
          </linearGradient>
        </defs>
        <rect x="12" y="12" width="40" height="40" rx="4" fill="none" stroke="url(#uiGrad)" strokeWidth="2" />
        <rect x="18" y="18" width="12" height="12" rx="2" fill="url(#uiGrad)" />
        <rect x="34" y="18" width="12" height="6" rx="1" fill="url(#uiGrad)" />
        <rect x="34" y="28" width="12" height="2" rx="1" fill="url(#uiGrad)" />
      </svg>
    ),
    Web: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <defs>
          <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C86FF" />
            <stop offset="100%" stopColor="#ff9ff2" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="24" fill="none" stroke="url(#webGrad)" strokeWidth="2" />
        <ellipse cx="32" cy="32" rx="10" ry="24" fill="none" stroke="url(#webGrad)" strokeWidth="1.5" />
        <line x1="8" y1="32" x2="56" y2="32" stroke="url(#webGrad)" strokeWidth="1.5" />
        <path d="M12 22 Q32 18 52 22" fill="none" stroke="url(#webGrad)" strokeWidth="1.5" />
        <path d="M12 42 Q32 46 52 42" fill="none" stroke="url(#webGrad)" strokeWidth="1.5" />
      </svg>
    )
  };

  return icons[icon] || icons.AI;
};

export default function ServiceCard({ icon, title, description }) {
    return (
      <div className="group bg-white p-8 rounded-lg border-2 border-gray-200 transition-all duration-500 hover:border-[#6C86FF] hover:shadow-lg hover:-translate-y-1">
        <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
          <ServiceIcon icon={icon} />
        </div>
        <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif", backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }}>{title}</h3>
        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{description}</p>
      </div>
    );
  }
  