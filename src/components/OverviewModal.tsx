import React from 'react';
import { X, Grid, Clock, ChevronRight } from 'lucide-react';
import { SLIDES_METADATA } from '../data/slidesData';

interface OverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const OverviewModal: React.FC<OverviewModalProps> = ({
  isOpen,
  onClose,
  currentSlideIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  const categoryBadges: Record<string, { label: string; bg: string; text: string }> = {
    intro: { label: 'Intro', bg: 'bg-sky-500/10 border-sky-500/30', text: 'text-sky-400' },
    concepts: { label: 'Concepts', bg: 'bg-indigo-500/10 border-indigo-500/30', text: 'text-indigo-400' },
    architecture: { label: 'Architecture', bg: 'bg-cyan-500/10 border-cyan-500/30', text: 'text-cyan-400' },
    'hands-on': { label: 'Hands-on', bg: 'bg-emerald-500/10 border-emerald-500/30', text: 'text-emerald-400' },
    industry: { label: 'Industry', bg: 'bg-amber-500/10 border-amber-500/30', text: 'text-amber-400' },
    'wrap-up': { label: 'Conclusion', bg: 'bg-purple-500/10 border-purple-500/30', text: 'text-purple-400' },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/20 text-cyan-400 rounded-lg border border-sky-500/30">
              <Grid className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">Presentation Slide Deck Overview</h2>
              <p className="text-xs text-slate-400">Click any slide card to jump directly. Press <kbd className="px-1 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px]">Esc</kbd> to return.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
            aria-label="Close overview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Responsive Card Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SLIDES_METADATA.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            const badge = categoryBadges[slide.category];

            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`group text-left p-4 rounded-xl border transition-all duration-200 relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-sky-950/40 border-cyan-500 shadow-[0_0_20px_rgba(14,165,233,0.3)] ring-2 ring-cyan-500/50'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/70 hover:border-slate-600 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 bg-slate-900 rounded border border-slate-700">
                      #{String(slide.id).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badge.bg} ${badge.text}`}
                    >
                      {badge.label}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition line-clamp-2 mb-1">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {slide.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {slide.durationMinutes} min
                  </span>
                  <span className="text-cyan-400 flex items-center opacity-0 group-hover:opacity-100 transition">
                    Jump <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>

                {isActive && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <div>
            Total: <span className="text-cyan-400 font-bold font-mono">15 Slides</span> (~45 mins lecture duration)
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
