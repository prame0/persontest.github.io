import React, { useState } from 'react';
import { Question, Option, TestResults } from './types';
import questions from './data/questions';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultCard from './components/ResultCard';
import LanguageSwitch from './components/LanguageSwitch';
import { calculateResults } from './utils/calculateResults';
import { Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [currentSelection, setCurrentSelection] = useState<Option | null>(null);
  const [testCompleted, setTestCompleted] = useState(false);
  const [results, setResults] = useState<TestResults | null>(null);
  const [testStarted, setTestStarted] = useState(false);
  const { t } = useTranslation();

  const handleSelectOption = (option: Option) => {
    setCurrentSelection(option);
  };

  const handleNextQuestion = () => {
    if (currentSelection) {
      // Save the current selection
      const updatedSelections = [...selectedOptions];
      updatedSelections[currentQuestionIndex] = currentSelection;
      setSelectedOptions(updatedSelections);
      
      // Move to the next question or complete the test
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        // Pre-select if there's already an answer for the next question
        setCurrentSelection(updatedSelections[currentQuestionIndex + 1] || null);
      } else {
        // Calculate and display results
        const testResults = calculateResults(updatedSelections);
        setResults(testResults);
        setTestCompleted(true);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentSelection(selectedOptions[currentQuestionIndex - 1] || null);
    }
  };

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleRestartTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setCurrentSelection(null);
    setTestCompleted(false);
    setResults(null);
  };

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <LanguageSwitch />
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white text-center">
            <Brain className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">{t('welcome.title')}</h1>
            <p className="text-indigo-100">{t('welcome.subtitle')}</p>
          </div>
          
          <div className="p-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('welcome.about')}</h2>
            <p className="text-gray-600 mb-6">
              {t('welcome.description')}
            </p>
            
            <div className="bg-indigo-50 p-6 rounded-xl mb-6">
              <h3 className="font-medium text-indigo-800 mb-3">{t('welcome.discover')}</h3>
              <ul className="space-y-3 text-gray-700">
                {[0, 1, 2, 3].map((index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2 font-bold">•</span>
                    {t(`welcome.discoverItems.${index}`)}
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-gray-600 mb-8">
              {t('welcome.note')}
            </p>
            
            <button
              onClick={handleStartTest}
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {t('welcome.startButton')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (testCompleted && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
        <LanguageSwitch />
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('results.title')}</h1>
            <p className="text-gray-600">{t('results.subtitle')}</p>
          </header>
          
          <ResultCard result={results.result} onRestartTest={handleRestartTest} />
          
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{t('results.traitComposition')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(Object.keys(results.scores) as Array<keyof typeof results.scores>).map((trait) => {
                const score = results.scores[trait];
                const percentage = (score / 20) * 100; // Assuming max score is 20
                
                return (
                  <div key={trait} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 capitalize flex items-center">
                        <span className={`inline-block w-3 h-3 rounded-full mr-2 ${trait === results.dominantTrait ? 'bg-indigo-600' : 'bg-gray-400'}`}></span>
                        {t(`traits.${trait}`)}
                      </span>
                      <span className="text-sm font-medium text-gray-700">{Math.round(percentage)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                          trait === results.dominantTrait 
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                            : 'bg-gray-400'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 text-center text-gray-600 text-sm">
              <p>
                {t('results.dominantTrait')} <span className="font-semibold text-indigo-600 capitalize">{t(`traits.${results.dominantTrait}`)}</span>, {t('results.traitContribution')}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <LanguageSwitch />
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('test.title')}</h1>
          <p className="text-gray-600">{t('test.subtitle')}</p>
        </header>
        
        <ProgressBar 
          currentQuestion={currentQuestionIndex + 1} 
          totalQuestions={questions.length} 
        />
        
        <QuestionCard 
          question={currentQuestion} 
          selectedOption={currentSelection}
          onSelectOption={handleSelectOption}
        />
        
        <div className="flex justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-indigo-600 hover:bg-gray-50 shadow-sm'
            }`}
          >
            {t('test.previous')}
          </button>
          
          <button
            onClick={handleNextQuestion}
            disabled={!currentSelection}
            className={`py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              !currentSelection
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg'
            }`}
          >
            {currentQuestionIndex < questions.length - 1 ? t('test.next') : t('test.seeResults')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;