import React from 'react';
import { PersonalityResult } from '../types';
import { ArrowRight, Award, Lightbulb, Zap, Briefcase, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ResultCardProps {
  result: PersonalityResult;
  onRestartTest: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onRestartTest }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white relative">
        <div className="absolute top-0 right-0 p-4 bg-white/10 backdrop-blur-sm rounded-bl-xl">
          <div className="text-xs uppercase tracking-wider font-semibold mb-1 text-indigo-200">
            {t('results.personalityType')}
          </div>
          <div className="text-lg font-bold">
            {t(`personalityResults.${result.trait}.personalityName`)}
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-3">
          {t(`personalityResults.${result.trait}.title`)}
        </h2>
        <p className="text-indigo-100 text-lg leading-relaxed max-w-3xl">
          {t(`personalityResults.${result.trait}.description`)}
        </p>
      </div>
      
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">{t('results.strengths')}</h3>
            </div>
            <ul className="space-y-3">
              {result.strengths.map((_, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {t(`personalityResults.${result.trait}.strengths.${index}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-amber-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-6 w-6 text-amber-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">{t('results.challenges')}</h3>
            </div>
            <ul className="space-y-3">
              {result.challenges.map((_, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {t(`personalityResults.${result.trait}.challenges.${index}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">{t('results.careers')}</h3>
            </div>
            <ul className="space-y-3">
              {result.careerSuggestions.map((_, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {t(`personalityResults.${result.trait}.careerSuggestions.${index}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">{t('results.skills')}</h3>
            </div>
            <ul className="space-y-3">
              {result.matchingSkills.map((_, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {t(`personalityResults.${result.trait}.matchingSkills.${index}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center">
          <div className="bg-indigo-100 rounded-full p-2 mb-4">
            <Award className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{t('results.uniqueValue')}</h3>
          <p className="text-gray-600 text-center max-w-2xl mb-6">
            {t('results.uniqueValueText', { trait: t(`traits.${result.trait}`) })}
          </p>
          
          <button
            onClick={onRestartTest}
            className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {t('results.restartButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;