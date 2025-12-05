export default function ProjectCard({ 
    title = "Titre du Projet", 
    category = "Web Design", 
    image = "https://via.placeholder.com/400x300" 
  }) {
    return (
      <div className="group relative overflow-hidden rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-500 hover:border-[#6C86FF] hover:shadow-lg hover:-translate-y-1">
        {/* Image de fond */}
        <div className="aspect-video w-full overflow-hidden bg-slate-200">
           <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
              {/* Placeholder visuel si pas d'image */}
              [Image Projet]
           </div>
        </div>
  
        {/* Overlay au survol */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{ color: '#6C86FF' }}>
            {category}
          </span>
          <h3 className="text-white text-xl font-bold mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            {title}
          </h3>
        </div>
      </div>
    );
  }