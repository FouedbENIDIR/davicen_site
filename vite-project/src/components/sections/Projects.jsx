// src/components/sections/Projects.jsx

import Section from '../common/Section';
import { useTranslation } from '../../i18n/LanguageContext';

function ProjectCard({ title, description, image }) {
  return (
    <div className="group bg-white rounded-lg border-2 border-gray-200 overflow-hidden transition-all duration-500 hover:border-[#6C86FF] hover:shadow-lg hover:-translate-y-1">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif", backgroundImage: 'linear-gradient(to right, #6C86FF, #ff9ff2)' }}>{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-500" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
    const t = useTranslation();

    return (
      <Section
        id="projets"
        label={t.projects.label}
        title={t.projects.title}
        description={t.projects.description}
        bgColor="bg-neutral-softer"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} image={project.image} />
          ))}
        </div>
      </Section>
    );
  }