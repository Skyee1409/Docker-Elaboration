import React, { useState } from 'react';
import {
  Box,
  Home,
  Ship,
  Plus,
  Equal,
  Zap,
  ShieldCheck,
  Layers,
} from 'lucide-react';

export const Slide03WhatIsDocker: React.FC = () => {
  const [activeAnalogy, setActiveAnalogy] = useState<'container' | 'house'>('container');

  const formulaComponents = [
    { label: 'Application Code', detail: 'Node.js, Python, Java source code', color: 'border-sky-500/50 bg-sky-950/40 text-sky-300' },
    { label: 'Dependencies', detail: 'npm packages, pip wheels, gems', color: 'border-indigo-500/50 bg-indigo-950/40 text-indigo-300' },
    { label: 'System Libraries', detail: 'libssl, libc, system headers, tools', color: 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300' },
    { label: 'Configuration', detail: 'ENV vars, exposed ports, paths', color: 'border-teal-500/50 bg-teal-950/40 text-teal-300' },
  ];

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header & Definition */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 03 • Fundamental Definition
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">What is Docker?</h2>
        
        {/* Quote / Formal Definition Card */}
        <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-sky-950/50 via-slate-900 to-indigo-950/40 border border-sky-500/30 shadow-lg">
          <p className="text-base md:text-lg text-slate-200 font-medium leading-relaxed">
            &ldquo;<span className="text-cyan-400 font-semibold">Docker</span> is an open platform for developing, shipping, and running applications inside <span className="text-sky-300 underline decoration-cyan-500/50 underline-offset-4">lightweight, isolated containers</span>.&rdquo;
          </p>
        </div>
      </div>

      {/* The Container Formula Visual */}
      <div className="my-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
        <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
            <Layers className="w-4 h-4 text-cyan-400" />
            THE DOCKER CONTAINER EQUATION
          </span>
          <span className="text-slate-500 hidden sm:inline">All-in-one standardized artifact</span>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 text-center">
          {formulaComponents.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className={`flex-1 min-w-[140px] p-3 rounded-lg border ${item.color} flex flex-col items-center justify-center shadow-sm`}>
                <span className="text-xs font-bold">{item.label}</span>
                <span className="text-[10px] text-slate-400 mt-0.5">{item.detail}</span>
              </div>
              {idx < formulaComponents.length - 1 && (
                <div className="text-slate-500 p-1 font-mono text-lg font-bold">
                  <Plus className="w-4 h-4 text-cyan-400" />
                </div>
              )}
            </React.Fragment>
          ))}

          <div className="text-cyan-400 p-1 font-mono text-lg font-bold">
            <Equal className="w-5 h-5" />
          </div>

          {/* Result: Standard Container */}
          <div className="flex-1 min-w-[170px] p-3.5 rounded-lg border border-cyan-400 bg-gradient-to-br from-sky-500/20 to-teal-500/20 text-white flex flex-col items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-1 ring-cyan-400/50">
            <Box className="w-5 h-5 text-cyan-300 mb-1 animate-bounce" />
            <span className="text-xs font-extrabold text-cyan-200">DOCKER CONTAINER</span>
            <span className="text-[10px] text-cyan-300 font-mono">Portable & Self-Sufficient</span>
          </div>
        </div>
      </div>

      {/* Visual Analogy: House vs Intermodal Shipping Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {/* House / Traditional */}
        <div
          onClick={() => setActiveAnalogy('house')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            activeAnalogy === 'house'
              ? 'bg-slate-900 border-amber-500/50 ring-2 ring-amber-500/30'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Traditional Analogy: A House</h4>
                <span className="text-[11px] text-amber-400 font-mono">Tied to the Ground</span>
              </div>
            </div>
            <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-800">Legacy</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Built brick-by-brick directly on local land. If you want to relocate to another city, you cannot move the house—you have to tear it down and rebuild everything on the new ground.
          </p>
        </div>

        {/* Shipping Container / Docker */}
        <div
          onClick={() => setActiveAnalogy('container')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            activeAnalogy === 'container'
              ? 'bg-slate-900 border-cyan-500/50 ring-2 ring-cyan-500/30 shadow-[0_0_20px_rgba(14,165,233,0.2)]'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-sky-500/20 text-cyan-400">
                <Ship className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Docker Analogy: Shipping Container</h4>
                <span className="text-[11px] text-cyan-400 font-mono">Standardized Intermodal Unit</span>
              </div>
            </div>
            <span className="text-[10px] text-cyan-300 px-2 py-0.5 rounded bg-sky-950 border border-sky-800">
              Modern
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Invented in 1956 to standardize cargo. It has universal standard dimensions: fits effortlessly on cargo ships, freight trains, and 18-wheel trucks without ever unboxing what is inside!
          </p>
        </div>
      </div>

      {/* Key Idea Golden Banner */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-600/30 via-cyan-500/20 to-emerald-600/30 border border-cyan-500/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-cyan-400/20 text-cyan-300">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-cyan-300 font-semibold tracking-wide uppercase">
              THE GOLDEN PRINCIPLE
            </span>
            <div className="text-lg md:text-xl font-extrabold text-white tracking-wide">
              &ldquo;Build Once, Run Anywhere.&rdquo;
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Guaranteed Parity</span>
        </div>
      </div>
    </div>
  );
};
