import React from 'react';
import { SLIDES_METADATA } from '../data/slidesData';

interface ProgressBarProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentSlideIndex, onSelectSlide }) => {
  const totalSlides = SLIDES_METADATA.length;
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="w-full bg-slate-900/80 backdrop-blur-sm border-t border-slate-800/80 px-4 py-2 flex flex-col gap-1 z-30">
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-semibold">
            {String(currentSlideIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-slate-600">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
          <span className="text-slate-400 ml-2 hidden sm:inline truncate max-w-[280px]">
            {SLIDES_METADATA[currentSlideIndex].title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 hidden md:inline">
            Topic: <span className="text-slate-300">{SLIDES_METADATA[currentSlideIndex].topic}</span>
          </span>
          <span className="text-cyan-400 font-semibold">{Math.round(progressPercent)}%</span>
        </div>
      </div>

      {/* Progress Track with interactive step points */}
      <div className="relative h-2 w-full bg-slate-800 rounded-full overflow-hidden cursor-pointer group">
        <div
          className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
        {/* Subtle glow highlight on head */}
        <div
          className="absolute top-0 bottom-0 w-3 bg-white blur-[2px] transition-all duration-300"
          style={{ left: `calc(${progressPercent}% - 6px)` }}
        />
      </div>

      {/* Slide dots */}
      <div className="flex justify-between items-center w-full pt-1 px-0.5">
        {SLIDES_METADATA.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          const isPassed = idx < currentSlideIndex;
          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(idx)}
              title={`Slide ${idx + 1}: ${slide.title}`}
              className="group/dot relative p-1 focus:outline-none"
              aria-label={`Jump to slide ${idx + 1}: ${slide.title}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-400 ring-4 ring-cyan-500/30 scale-125'
                    : isPassed
                    ? 'bg-sky-600 hover:bg-sky-400'
                    : 'bg-slate-700 hover:bg-slate-500'
                }`}
              />
              {/* Tooltip on hover */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden group-hover/dot:flex flex-col items-center pointer-events-none z-50">
                <div className="bg-slate-900 border border-slate-700 text-slate-200 text-[11px] font-sans px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap">
                  <span className="text-cyan-400 font-mono font-semibold">#{idx + 1}</span> {slide.title}
                </div>
                <div className="w-1.5 h-1.5 bg-slate-900 border-r border-b border-slate-700 rotate-45 -mt-1" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
