import { useState } from 'react';

export default function TeamMember({ 
    name = "Nom du Membre", 
    role = "Rôle",
    description = "Passionné et talentueux, apportant expertise et créativité à chaque projet.",
    image 
  }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div 
        className="group flex flex-col items-center p-4 bg-white rounded-lg border-2 border-gray-200 transition-all duration-500 hover:border-[#6C86FF] hover:shadow-lg hover:-translate-y-1 cursor-pointer relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="w-24 h-24 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-gray-300">
          {/* Ici on pourrait mettre une vraie <img> */}
          <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
        </div>
        <h4 className="font-bold text-black text-center" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{name}</h4>
        <span className="text-sm text-gray-600 text-center" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{role}</span>
        
        {/* Description avec animation au hover - positionnée en absolu */}
        <div className={`absolute top-full left-4 right-4 mt-2 pt-3 border-t border-gray-300 transition-all duration-700 ${
          isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <p className="text-xs text-gray-700 text-center leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            {description}
          </p>
        </div>
      </div>
    );
  }