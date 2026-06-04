import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronDown, 
  HelpCircle,
  Eye, 
  CheckCircle2, 
  ListFilter
} from 'lucide-react';
import { Question, Chapter, DifficultyLevel } from '../types';

interface StudySessionProps {
  chapter: Chapter;
  questions: Question[];
  onBack: () => void;
  addToReview: (id: string) => void;
  markAsMastered: (id: string) => void;
}

export default function StudySession({ 
  chapter, 
  questions, 
  onBack, 
  addToReview, 
  markAsMastered 
}: StudySessionProps) {
  const [isTopicSelectorOpen, setIsTopicSelectorOpen] = useState(true);
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['all']);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [initialUniqueCount, setInitialUniqueCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [masteredThisSession, setMasteredThisSession] = useState<Set<string>>(new Set());

  // 1. Process filtering by selected topics.
  const startSession = () => {
    let filtered;
    if (selectedTopics.includes('all') || selectedTopics.length === 0) {
      filtered = questions.filter(q => q.chapterId === chapter.id);
    } else {
      filtered = questions.filter(q => q.chapterId === chapter.id && selectedTopics.includes(q.topic));
    }
    
    setSessionQuestions(filtered);
    setInitialUniqueCount(filtered.length);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFinished(false);
    setMasteredThisSession(new Set());
    setIsTopicSelectorOpen(false);
  };

  const toggleTopic = (topic: string) => {
    if (topic === 'all') {
      setSelectedTopics(['all']);
      return;
    }

    setSelectedTopics(prev => {
      const filtered = prev.filter(t => t !== 'all');
      if (filtered.includes(topic)) {
        const next = filtered.filter(t => t !== topic);
        return next.length === 0 ? ['all'] : next;
      } else {
        return [...filtered, topic];
      }
    });
  };

  const currentQuestion = sessionQuestions[currentIndex] || null;

  const remainingCount = useMemo(() => {
    const uniqueIds = new Set(sessionQuestions.map(q => q.id));
    const masteredInThisSession = Array.from(uniqueIds).filter(id => masteredThisSession.has(id)).length;
    return Math.max(0, uniqueIds.size - masteredInThisSession);
  }, [sessionQuestions, masteredThisSession]);

  const handleDifficulty = (difficulty: DifficultyLevel) => {
    if (!currentQuestion) return;
    const qId = currentQuestion.id;

    if (difficulty === DifficultyLevel.EASY) {
      markAsMastered(qId);
      setMasteredThisSession(prev => new Set(prev).add(qId));
      moveToNext();
    } else {
      addToReview(qId);
      
      // Handle recurrence
      let jump = 2;
      if (difficulty === DifficultyLevel.HARD) jump = 5;
      if (difficulty === DifficultyLevel.MEDIUM) jump = 10;
      
      const targetIndex = currentIndex + jump + 1;
      
      const updatedQueue = [...sessionQuestions];
      // Insert a copy of the current question later in the queue
      if (targetIndex < updatedQueue.length) {
        updatedQueue.splice(targetIndex, 0, currentQuestion);
      } else {
        // Just push to end if it's too short
        updatedQueue.push(currentQuestion);
      }
      
      setSessionQuestions(updatedQueue);
      moveToNext();
    }
  };

  const moveToNext = () => {
    setShowAnswer(false);
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div id="study-session-container" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Topic Selection "Middle window" */}
      <AnimatePresence>
        {isTopicSelectorOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] p-8 w-full max-w-xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]"
            >
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <h2 className="text-2xl font-black text-slate-900 leading-tight">Session Setup</h2>
                   <p className="text-sm text-slate-400 font-medium mt-1">Select subjects for {chapter.title}</p>
                 </div>
                 <button onClick={onBack} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                   <ArrowLeft className="w-5 h-5" />
                 </button>
              </div>

              {/* Scrollable Topics Area */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar mb-8">
                 <button
                   onClick={() => toggleTopic('all')}
                   className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all border-2 ${selectedTopics.includes('all') ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-50 border-transparent text-slate-700 hover:bg-slate-100'}`}
                 >
                   <span className="font-bold text-sm">📚 Show All of Chapter Questions</span>
                   {selectedTopics.includes('all') && <CheckCircle2 className="w-5 h-5" />}
                 </button>
                 
                 {chapter.topics && chapter.topics.map((top, idx) => {
                    const isSelected = selectedTopics.includes(top);
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleTopic(top)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all border-2 ${isSelected ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200'}`}
                      >
                        <span className="font-bold text-sm">{idx + 1}. {top}</span>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                      </button>
                    );
                 })}
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button
                  onClick={startSession}
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-xl active:scale-95"
                >
                  Start Recall Session
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Header (Minimized during study) */}
      <header className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-sm font-black text-slate-900 uppercase tracking-widest">
              {chapter.title}
            </h1>
            <p className="text-[10px] text-slate-400 font-bold mt-0.5">
              Card {currentIndex + 1} • {selectedTopics.length === 1 && selectedTopics[0] === 'all' ? 'All Subjects' : `${selectedTopics.length} Topics Selected`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
           {!isFinished && (
             <div className="hidden md:flex flex-col items-end bg-blue-50/50 border border-blue-100 px-3 py-1.5 rounded-xl">
                <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Session Progress</span>
                <span className="text-xs text-blue-600 font-black leading-none">
                  {remainingCount} Remaining
                </span>
             </div>
           )}
           <button
             onClick={() => setIsTopicSelectorOpen(true)}
             className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
             title="Change Topics"
           >
             <ListFilter className="w-5 h-5" />
           </button>
        </div>
      </header>


      {/* Question Card Content Area */}
      <div id="study-question-card-wrapper" className="w-full flex flex-col">
        {sessionQuestions.length === 0 ? (
          /* Empty Topic list Placeholder card */
          <div id="no-questions-placeholder" className="bg-white rounded-3xl border border-slate-200 p-12 py-16 text-center shadow-sm">
            <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Questions Populated Yet</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
              The selected subjects (<strong>{selectedTopics.includes('all') ? 'All Chapter Subjects' : `${selectedTopics.length} Specific Topics`}</strong>) do not have any questions registered in the system yet.
            </p>
            <div className="bg-blue-50/60 text-blue-750 text-xs font-medium px-4 py-3 rounded-2xl max-w-lg mx-auto border border-blue-100 mb-6">
              💡 <strong>System Note:</strong> No questions populated for this selection. They can be added to the bank or requested for integration.
            </div>
            <button 
              id="back-btn-empty"
              onClick={onBack}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-md"
            >
              Back to Chapters List
            </button>
          </div>
        ) : isFinished ? (
          /* Finished State */
          <div id="session-finished-card" className="space-y-6 text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-950">Excellent Recall!</h2>
            <p className="text-slate-500 text-base max-w-sm mx-auto">
              You have reviewed all loaded questions under this section. Excellent work mastering your active recall.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <button 
                id="finish-back-btn"
                onClick={onBack} 
                className="px-8 py-3 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                Back to Chapters Index
              </button>
            </div>
          </div>
        ) : (
          /* Main Question Flashcard */
          <motion.div 
            layout
            id="active-question-card"
            className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-250/20 overflow-hidden min-h-[460px] flex flex-col"
          >
            {/* Question Details header */}
            <div className="p-8 border-b border-slate-100 text-left bg-gradient-to-r from-slate-50/40 to-white">
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[9px] font-black px-2.5 py-1 rounded uppercase tracking-wider">
                  {currentQuestion.type === 'short-essay' ? 'Enumerate' : 
                   currentQuestion.type === 'problem-solving' ? 'Patient Case' : 
                   currentQuestion.type === 'define' ? 'Define' : 'Short Answer'}
                </span>
                <span className="text-slate-205 text-xs font-light">|</span>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest">
                   {currentQuestion.isClinical ? 'Clinical Recoil Selection' : 'Theoretical Concept'}
                </span>
                {currentQuestion.topic && (
                  <>
                    <span className="text-slate-205 text-xs font-light">|</span>
                    <span className="text-blue-600 text-[9px] font-black uppercase tracking-wider border border-blue-100 bg-blue-50/50 px-2 py-0.5 rounded">
                      {currentQuestion.topic}
                    </span>
                  </>
                )}
              </div>
              
              <div className="flex-1 flex flex-col pt-2">
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-semibold max-w-4xl">
                   {currentQuestion.content}
                </p>
              </div>
            </div>

            {/* Answer Display Card view */}
            <div className="flex-1 flex flex-col min-h-[220px]">
              <AnimatePresence mode="wait">
                {!showAnswer ? (
                  <motion.div 
                    key="show-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center p-10 bg-slate-50/15"
                  >
                    <button 
                      id="show-answer-trigger-btn"
                      onClick={() => setShowAnswer(true)}
                      className="group relative px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm overflow-hidden transition-all hover:scale-[1.03] active:scale-95 shadow-lg shadow-slate-200"
                    >
                      <span className="relative z-10 flex items-center gap-2.5">
                        <Eye className="w-4 h-4" />
                        <span>Show Model Answer</span>
                      </span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="answer-display"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="flex-1 bg-slate-50/30 p-8 text-left border-b border-slate-50">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Model Study Outline</div>
                      <div className="space-y-3.5 max-w-4xl">
                        {currentQuestion.answer.split('\n').map((line, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                            <p className="text-slate-705 font-medium text-base md:text-lg leading-relaxed">
                              {line.replace(/^([•●\-*]|\s)+/, '')}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Recurrence Controls */}
                    <div className="bg-slate-50/40 p-4 grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-slate-100">
                      <button 
                        id="difficulty-very-hard-btn"
                        onClick={() => handleDifficulty(DifficultyLevel.VERY_HARD)}
                        className="group flex flex-col items-center p-2.5 bg-white rounded-xl border border-slate-200 hover:border-rose-200 hover:bg-rose-50/30 transition-all text-center"
                      >
                        <div className="text-rose-600 font-extrabold text-xs">Very Hard</div>
                        <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">In 2 Cards</div>
                      </button>
                      
                      <button 
                        id="difficulty-hard-btn"
                        onClick={() => handleDifficulty(DifficultyLevel.HARD)}
                        className="group flex flex-col items-center p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/20 hover:border-amber-500/40 hover:bg-amber-500/15 transition-all text-center"
                      >
                        <div className="text-amber-700 font-extrabold text-xs">Hard</div>
                        <div className="text-[9px] text-amber-500 font-semibold uppercase tracking-wider mt-0.5 font-mono">In 5 Cards</div>
                      </button>

                      <button 
                        id="difficulty-medium-btn"
                        onClick={() => handleDifficulty(DifficultyLevel.MEDIUM)}
                        className="group flex flex-col items-center p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/15 transition-all text-center"
                      >
                        <div className="text-blue-700 font-extrabold text-xs">Medium</div>
                        <div className="text-[9px] text-blue-500 font-semibold uppercase tracking-wider mt-0.5">In 10 Cards</div>
                      </button>

                      <button 
                        id="difficulty-easy-btn"
                        onClick={() => handleDifficulty(DifficultyLevel.EASY)}
                        className="group flex flex-col items-center p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/15 transition-all text-center"
                      >
                        <div className="text-emerald-750 font-extrabold text-xs">Easy</div>
                        <div className="text-[9px] text-emerald-600 font-semibold uppercase tracking-wider mt-0.5">Ready & Mastered</div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Difficulty Feedback Indicators standard legend */}
        {!isFinished && sessionQuestions.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-1.5 grayscale opacity-75">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Very Hard</span>
            </div>
            <div className="flex items-center gap-1.5 grayscale opacity-75">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Hard</span>
            </div>
            <div className="flex items-center gap-1.5 grayscale opacity-75">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Medium</span>
            </div>
            <div className="flex items-center gap-1.5 grayscale opacity-75">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Easy</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
