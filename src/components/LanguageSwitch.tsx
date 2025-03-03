import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitch: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="fixed top-4 right-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-3 rounded-full shadow-md hover:bg-white transition-all z-50"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4 text-indigo-600" />
      <span className="text-sm font-medium text-gray-700">
        {i18n.language === 'en' ? t('language.th') : t('language.en')}
      </span>
    </button>
  );
};

export default LanguageSwitch;