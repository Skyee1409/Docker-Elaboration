import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/slidesData';
import {
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  ArrowRight,
  ChevronLeft,
  Trophy,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Slide15Quiz: React.FC = () => {
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentQIndex];

  const handleSelectOption = (letter: string) => {
    if (selectedAnswers[currentQuestion.id]) return; // already answered this question

    const updated = {
      ...selectedAnswers,
      [currentQuestion.id]: letter,
    };
    setSelectedAnswers(updated);

    // If all questions answered, trigger completion
    if (Object.keys(updated).length === totalQuestions) {
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleNext = () => {
    if (currentQIndex < totalQuestions - 1) {
      setCurrentQIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQIndex(0);
    setIsCompleted(false);
  };

  // Calculate score
  const score = QUIZ_QUESTIONS.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const getScoreVerdict = () => {
    if (score === 5) {
      return {
        title: 'Excellent! Docker Master',
        desc: 'Outstanding performance! You have thoroughly mastered core Docker concepts, architecture, and commands.',
        badge: 'Top Tier',
        color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40',
      };
    } else if (score >= 3) {
      return {
        title: 'Good Job! Solid Foundation',
        desc: 'Well done! You have a solid grasp of containerization basics. Review Slide 4 (Architecture) and Slide 8 (Dockerfile) to hone your skills.',
        badge: 'Proficient',
        color: 'text-cyan-400 border-cyan-500/40 bg-sky-950/40',
      };
    } else {
      return {
        title: 'Keep Learning!',
        desc: 'Good first effort! Use the slide overview (Esc) to review the key concepts of images, containers, and CLI commands.',
        badge: 'Beginner',
        color: 'text-amber-400 border-amber-500/40 bg-amber-950/40',
      };
    }
  };

  const currentSelection = selectedAnswers[currentQuestion.id];
  const isCurrentAnswered = Boolean(currentSelection);
  const isCurrentCorrect = currentSelection === currentQuestion.correctAnswer;

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 15 • Knowledge Check
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">How Well Do You Know Docker?</h2>
            <p className="text-sm md:text-base text-slate-400 mt-0.5">
              5 College-level technical multiple-choice questions to reinforce your learning.
            </p>
          </div>

          {/* Score Counter Pill */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs flex items-center gap-2">
              <span className="text-slate-400">Score:</span>
              <span className="text-cyan-400 font-bold text-sm">
                {score} / {totalQuestions}
              </span>
            </div>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              title="Reset Quiz"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Question Display or Completion Results Screen */}
      {!isCompleted ? (
        <div className="my-2 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between flex-1">
          <div>
            {/* Question Progress Tabs */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const answered = Boolean(selectedAnswers[q.id]);
                  const correct = selectedAnswers[q.id] === q.correctAnswer;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQIndex(idx)}
                      className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition flex items-center justify-center ${
                        idx === currentQIndex
                          ? 'ring-2 ring-cyan-400 bg-sky-600 text-white'
                          : answered
                          ? correct
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                            : 'bg-rose-950 text-rose-300 border border-rose-500/40'
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <span className="text-xs font-mono text-slate-400">
                Question {currentQIndex + 1} of {totalQuestions}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-relaxed">
              {currentQuestion.question}
            </h3>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQuestion.options.map((opt) => {
                const isSelected = currentSelection === opt.letter;
                const isCorrect = opt.letter === currentQuestion.correctAnswer;

                let btnStyles = 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-200';
                if (isCurrentAnswered) {
                  if (isCorrect) {
                    btnStyles = 'bg-emerald-950/70 border-emerald-500/80 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)] font-semibold';
                  } else if (isSelected) {
                    btnStyles = 'bg-rose-950/70 border-rose-500/80 text-rose-200';
                  } else {
                    btnStyles = 'bg-slate-950/40 border-slate-800/60 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.letter}
                    onClick={() => handleSelectOption(opt.letter)}
                    disabled={isCurrentAnswered}
                    className={`w-full p-3 rounded-xl border text-left transition-all duration-150 flex items-center justify-between ${btnStyles}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-cyan-400 shrink-0">
                        {opt.letter}
                      </span>
                      <span className="text-xs sm:text-sm">{opt.text}</span>
                    </div>

                    {isCurrentAnswered && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                    )}
                    {isCurrentAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation Box on Answer */}
          {isCurrentAnswered && (
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in duration-200">
              <div className="text-xs text-slate-300">
                <span className={`font-bold ${isCurrentCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isCurrentCorrect ? 'Correct! ' : 'Incorrect. '}
                </span>
                <span className="text-slate-400">{currentQuestion.explanation}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {currentQIndex > 0 && (
                  <button
                    onClick={handlePrev}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1 transition"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                )}

                {currentQIndex < totalQuestions - 1 && (
                  <button
                    onClick={handleNext}
                    className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center gap-1.5 transition shadow-sm"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Results Screen */
        <div className="my-2 p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 flex-1 animate-in zoom-in-95 duration-300">
          <div className="p-4 rounded-2xl bg-sky-500/20 text-cyan-400 border border-sky-500/30">
            <Trophy className="w-12 h-12" />
          </div>

          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              QUIZ ASSESSMENT RESULTS
            </span>
            <h3 className="text-3xl font-extrabold text-white mt-1">
              You Scored {score} / {totalQuestions}
            </h3>
          </div>

          {/* Score verdict card */}
          {(() => {
            const verdict = getScoreVerdict();
            return (
              <div className={`p-4 rounded-xl border max-w-lg ${verdict.color}`}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Award className="w-5 h-5" />
                  <span className="font-bold text-base">{verdict.title}</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">{verdict.desc}</p>
              </div>
            );
          })()}

          {/* Actions */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition shadow-lg shadow-sky-600/30"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Click options to evaluate answer immediately.</span>
        <span>College Technical Evaluation Module</span>
      </div>
    </div>
  );
};
