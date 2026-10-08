import React from 'react';
import { DockerWhale } from '../components/DockerWhale';
import type { PresenterInfo } from '../types/presentation';
import { Play, Sparkles, Box, Terminal, Server, ArrowRight, Edit3 } from 'lucide-react';

interface Slide01TitleProps {
  onStart: () => void;
  presenter: PresenterInfo;
  onEditPresenter: () => void;
}

export const Slide01Title: React.FC<Slide01TitleProps> = ({
  onStart,
  presenter,
  onEditPresenter,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1228] to-[#071021]">
      {/* Decorative background floating containers */}
      <div className="absolute top-10 right-20 w-24 h-20 rounded-xl bg-sky-900/20 border border-sky-500/20 rotate-12 animate-float-slow pointer-events-none hidden lg:flex items-center justify-center">
        <Box className="w-8 h-8 text-sky-400/40" />
      </div>
      <div className="absolute bottom-28 left-16 w-20 h-16 rounded-lg bg-cyan-900/20 border border-cyan-500/20 -rotate-12 animate-float-reverse pointer-events-none hidden lg:flex items-center justify-center">
        <Server className="w-6 h-6 text-cyan-400/30" />
      </div>
      <div className="absolute top-1/3 left-10 w-16 h-14 rounded-lg bg-indigo-900/20 border border-indigo-500/20 rotate-6 animate-pulse-glow pointer-events-none hidden md:flex items-center justify-center">
        <Terminal className="w-6 h-6 text-indigo-400/30" />
      </div>

      {/* Top Tagline / Category */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-mono font-medium tracking-wide">
            TECHNICAL DECK • ZERO TO MODERATE
          </span>
        </div>
        <div className="text-xs text-slate-400 font-mono hidden sm:block">
          College-Level Technical Presentation
        </div>
      </div>

      {/* Hero Central Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10">
        {/* Left Column: Title & Information */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-400/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              From Code to Container
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans leading-none">
              DOCKER
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Containerization Made Simple
            </p>
          </div>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            An interactive engineering masterclass exploring modern software virtualization,
            layered image builds, runtime container isolation, and production pipelines.
          </p>

          {/* Start CTA */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-400 text-slate-950 font-bold text-base shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_45px_rgba(14,165,233,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-slate-950 text-slate-950" />
              <span>START PRESENTATION</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-xs text-slate-400 font-mono">
              Press <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 text-cyan-300 rounded text-xs font-semibold">Space</kbd> or <kbd className="px-2 py-1 bg-slate-800 border border-slate-700 text-cyan-300 rounded text-xs font-semibold">→</kbd> to advance
            </span>
          </div>
        </div>

        {/* Right Column: Visual Whale Hero */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative group">
            {/* Glowing background halo */}
            <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-2xl transform scale-110 group-hover:bg-sky-400/30 transition-all duration-700" />
            <DockerWhale size="hero" animated={true} />
          </div>

          <div className="mt-4 flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Simulator Ready</span>
          </div>
        </div>
      </div>

      {/* Presenter Footer Bar */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 z-10">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Presenter:</span>
            <span className="text-white font-medium">{presenter.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Institution:</span>
            <span className="text-slate-300">{presenter.department}, {presenter.institution}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Date:</span>
            <span className="text-slate-300 font-mono">{presenter.date}</span>
          </div>
        </div>

        <button
          onClick={onEditPresenter}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs transition"
          title="Edit presenter credentials"
        >
          <Edit3 className="w-3 h-3 text-cyan-400" />
          <span>Edit Details</span>
        </button>
      </div>
    </div>
  );
};
