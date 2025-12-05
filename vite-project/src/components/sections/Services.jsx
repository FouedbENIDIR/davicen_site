import Section from '../common/Section';
import ServiceCard from '../ui/ServiceCard';
import { useTranslation } from '../../i18n/LanguageContext';

export default function Services() {
  const t = useTranslation();

  return (
    <Section
      id="services"
      label={t.services.label}
      title={t.services.title}
      description={t.services.description}
      bgColor="bg-neutral-light"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {t.services.items.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
}
