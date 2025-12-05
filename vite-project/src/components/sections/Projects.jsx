// src/components/sections/Projects.jsx

import Section from '../common/Section';
import AnimatedCard from '../common/AnimatedCard';
import { useTranslation } from '../../i18n/LanguageContext';

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
            <AnimatedCard key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </Section>
    );
  }