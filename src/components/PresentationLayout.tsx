import React, { useEffect, useState, useCallback } from 'react';
import { SLIDES_METADATA } from '../data/slidesData';
import { Navigation } from './Navigation';
import { ProgressBar } from './ProgressBar';
import { OverviewModal } from './OverviewModal';
import { ShortcutsModal } from './ShortcutsModal';
import { PresenterModal } from './PresenterModal';
import type { PresenterInfo } from '../types/presentation';
import { Box, Layers } from 'lucide-react';

interface PresentationLayoutProps {
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number | ((prev: number) => number)) => void;
  presenter: PresenterInfo;
  setPresenter: (info: PresenterInfo) => void;
  children: React.ReactNode;
}

export const PresentationLayout: React.FC<PresentationLayoutProps> = ({
  currentSlideIndex,
  setCurrentSlideIndex,
  presenter,
  setPresenter,
  children,
}) => {
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isPresenterOpen, setIsPresenterOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = SLIDES_METADATA.length;
  const currentSlide = SLIDES_METADATA[currentSlideIndex];

  // Navigation handlers
  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides, setCurrentSlideIndex]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, [setCurrentSlideIndex]);

  const handleFirst = useCallback(() => {
    setCurrentSlideIndex(0);
  }, [setCurrentSlideIndex]);

  const handleLast = useCallback(() => {
    setCurrentSlideIndex(totalSlides - 1);
  }, [totalSlides, setCurrentSlideIndex]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case ' ': // Space bar
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          handleFirst();
          break;
        case 'End':
          e.preventDefault();
          handleLast();
          break;
        case 'Escape':
          e.preventDefault();
          setIsOverviewOpen((prev) => !prev);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setIsPresentationMode((prev) => !prev);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case '?':
          e.preventDefault();
          setIsShortcutsOpen((prev) => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleFirst, handleLast]);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 select-none">
      {/* Top Header - Hidden in minimal Presentation/Projector mode */}
      {!isPresentationMode && (
        <header className="h-12 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 flex items-center justify-between z-30 shrink-0">
          <div className="flex items-center gap-3">
            {/* Brand Logo */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-cyan-400">
                <Box className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-wider text-sm text-white font-mono">DOCKER</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                  SLIDE DECK
                </span>
              </div>
            </div>

            <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

            {/* Current Slide Topic */}
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <span className="text-slate-400">Topic:</span>
              <span className="text-cyan-300 font-medium px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700/60">
                {currentSlide.topic}
              </span>
            </div>
          </div>

          {/* Quick Info & Status */}
          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-400 hidden md:inline">
              Slide <span className="text-cyan-400 font-mono font-bold">{currentSlideIndex + 1}</span> of{' '}
              <span className="font-mono">{totalSlides}</span>
            </span>

            <button
              onClick={() => setIsOverviewOpen(true)}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 transition border border-slate-700"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">All Slides</span>
            </button>
          </div>
        </header>
      )}

      {/* Main Slide Content Area (16:9 Presentation Stage) */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden relative bg-gradient-to-b from-slate-950 via-[#0b1329] to-slate-950">
        {/* Subtle grid background pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Floating gradient glow spheres */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* 16:9 Stage Container */}
        <div className="w-full h-full max-w-[1720px] max-h-[968px] presentation-aspect flex flex-col relative z-10 glass-panel rounded-2xl shadow-2xl overflow-hidden border border-slate-700/60">
          {children}
        </div>
      </main>

      {/* Slide Progress Bar */}
      <ProgressBar
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={(idx) => setCurrentSlideIndex(idx)}
      />

      {/* Bottom Navigation */}
      <Navigation
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onToggleOverview={() => setIsOverviewOpen(true)}
        onToggleShortcuts={() => setIsShortcutsOpen(true)}
        onTogglePresentationMode={() => setIsPresentationMode((prev) => !prev)}
        isPresentationMode={isPresentationMode}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onOpenPresenterModal={() => setIsPresenterOpen(true)}
      />

      {/* Modals */}
      <OverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={(idx) => setCurrentSlideIndex(idx)}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      <PresenterModal
        isOpen={isPresenterOpen}
        onClose={() => setIsPresenterOpen(false)}
        presenter={presenter}
        onSave={(updated) => setPresenter(updated)}
      />
    </div>
  );
};
