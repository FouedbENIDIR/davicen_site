// src/components/sections/Contact.jsx

import Section from '../common/Section';
import Button from '../common/Button';
import { useTranslation } from '../../i18n/LanguageContext';

export default function Contact() {
    const t = useTranslation();

    return (
      <Section
        id="contact"
        label={t.contact.label}
        title={t.contact.title}
        description={t.contact.description}
        bgColor="bg-accent-softer"
      >
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            {/* Champ Email */}
            <div>
              <label className="block text-sm font-semibold text-black mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                {t.contact.email_label}
              </label>
              <input 
                type="email" 
                placeholder={t.contact.email_placeholder}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white focus:border-[#6C86FF] focus:ring-2 focus:ring-[#6C86FF]/20 outline-none transition-all font-medium hover:border-gray-400"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              />
            </div>

            {/* Champ Message */}
            <div>
              <label className="block text-sm font-semibold text-black mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                {t.contact.message_label}
              </label>
              <textarea 
                rows="5"
                placeholder={t.contact.message_placeholder}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white focus:border-[#6C86FF] focus:ring-2 focus:ring-[#6C86FF]/20 outline-none transition-all resize-none font-medium hover:border-gray-400"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              ></textarea>
            </div>

            {/* Bouton d'envoi */}
            <div className="pt-4">
              <Button variant="primary" className="w-full justify-center">
                {t.contact.submit_btn}
              </Button>
            </div>
          </form>
        </div>
      </Section>
    );
  }