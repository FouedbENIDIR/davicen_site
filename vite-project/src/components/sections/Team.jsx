// src/components/sections/Team.jsx

import Section from '../common/Section';
import TeamMember from '../ui/TeamMember';
import { useTranslation } from '../../i18n/LanguageContext';

export default function Team() {
    const t = useTranslation();
  
    return (
      <Section
        id="équipe"
        label={t.team.label}
        title={t.team.title}
        description={t.team.description}
        bgColor="bg-neutral-light"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {t.team.items.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} description={member.description} />
          ))}
        </div>
      </Section>
    );
  }