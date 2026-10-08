import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Grid,
  HelpCircle,
  Tv,
  User,
} from 'lucide-react';

interface NavigationProps {
  currentSlideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleOverview: () => void;
  onToggleShortcuts: () => void;
  onTogglePresentationMode: () => void;
  isPresentationMode: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenPresenterModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext,
  onToggleOverview,
  onToggleShortcuts,
  onTogglePresentationMode,
  isPresentationMode,
  isFullscreen,
  onToggleFullscreen,
  onOpenPresenterModal,
}) => {
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === totalSlides - 1;

  return (
    <footer className="w-full bg-slate-900/95 border-t border-slate-800 px-4 py-2.5 flex items-center justify-between text-slate-300 z-40 select-none">
      {/* Left: Overview, Presenter, Keyboard help */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleOverview}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700/80 transition shadow-sm hover:border-cyan-500/50"
          title="Open slide deck overview (Esc)"
        >
          <Grid className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Overview</span>
          <kbd className="hidden md:inline px-1 py-0.2 bg-slate-900 border border-slate-700 rounded text-[10px] text-slate-400">
            Esc
          </kbd>
        </button>

        <button
          onClick={onOpenPresenterModal}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700/80 transition"
          title="Presenter & Institution Info"
        >
          <User className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden lg:inline text-xs">Presenter</span>
        </button>

        <button
          onClick={onToggleShortcuts}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700/80 transition"
          title="Keyboard Navigation Shortcuts (?)"
        >
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden lg:inline text-xs">Shortcuts</span>
          <kbd className="hidden md:inline px-1 py-0.2 bg-slate-900 border border-slate-700 rounded text-[10px] text-slate-400">
            ?
          </kbd>
        </button>
      </div>

      {/* Middle: Prev / Slide Number / Next */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          disabled={isFirstSlide}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium text-xs border transition ${
            isFirstSlide
              ? 'bg-slate-900/50 text-slate-600 border-slate-800 cursor-not-allowed'
              : 'bg-slate-800 hover:bg-sky-600 hover:text-white text-slate-200 border-slate-700 hover:border-sky-500 shadow-sm'
          }`}
          title="Previous slide (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
          <kbd className="hidden md:inline px-1 py-0.2 bg-slate-900/70 border border-slate-700 rounded text-[10px] text-slate-400">
            ←
          </kbd>
        </button>

        <div className="flex items-center gap-2 px-3 py-1 bg-slate-950/80 rounded-lg border border-slate-800 font-mono text-xs">
          <span className="text-cyan-400 font-bold text-sm">
            {String(currentSlideIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-slate-600 font-light">/</span>
          <span className="text-slate-400">{String(totalSlides).padStart(2, '0')}</span>
        </div>

        <button
          onClick={onNext}
          disabled={isLastSlide}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium text-xs border transition ${
            isLastSlide
              ? 'bg-slate-900/50 text-slate-600 border-slate-800 cursor-not-allowed'
              : 'bg-sky-600 hover:bg-sky-500 text-white border-sky-400/50 shadow-[0_0_15px_rgba(14,165,233,0.35)]'
          }`}
          title="Next slide (Right Arrow or Space)"
        >
          <span className="hidden sm:inline">Next</span>
          <kbd className="hidden md:inline px-1 py-0.2 bg-sky-800 border border-sky-500/50 rounded text-[10px] text-sky-200">
            →
          </kbd>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right: Presentation Mode & Fullscreen */}
      <div className="flex items-center gap-2">
        <button
          onClick={onTogglePresentationMode}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
            isPresentationMode
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
          }`}
          title="Toggle Presentation Mode (P)"
        >
          <Tv className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Projector</span>
          <kbd className="hidden md:inline px-1 py-0.2 bg-slate-900 border border-slate-700 rounded text-[10px] text-slate-400">
            P
          </kbd>
        </button>

        <button
          onClick={onToggleFullscreen}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4 text-cyan-400" />
          ) : (
            <Maximize2 className="w-4 h-4 text-cyan-400" />
          )}
        </button>
      </div>
    </footer>
  );
};
