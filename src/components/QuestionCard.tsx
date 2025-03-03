import React from 'react';
import { Question, Option } from '../types';
import { useTranslation } from 'react-i18next';

interface QuestionCardProps {
  question: Question;
  selectedOption: Option | null;
  onSelectOption: (option: Option) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedOption, 
  onSelectOption 
}) => {
  const { t } = useTranslation();
  const questionIndex = question.id - 1;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        {t(`questions.${questionIndex}.text`)}
      </h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <div 
            key={option.id}
            className={`p-4 rounded-md border cursor-pointer transition-all ${
              selectedOption?.id === option.id 
                ? 'border-indigo-500 bg-indigo-50' 
                : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
            }`}
            onClick={() => onSelectOption(option)}
          >
            <p className="text-gray-700">{t(`questions.${questionIndex}.options.${index}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;