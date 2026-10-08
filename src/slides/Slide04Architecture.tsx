import React, { useState } from 'react';
import { ARCHITECTURE_COMPONENTS } from '../data/slidesData';
import {
  Terminal,
  Server,
  Layers,
  Box,
  HardDrive,
  Cloud,
  ArrowDown,
  Info,
  CheckCircle2,
  Code,
} from 'lucide-react';

export const Slide04Architecture: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('daemon');
  const selectedComponent = ARCHITECTURE_COMPONENTS[selectedId];

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 04 • Under the Hood
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Docker Architecture</h2>
        <p className="text-sm md:text-base text-slate-400 mt-1">
          A client-server architecture where the Docker Client speaks REST to the Docker Daemon on the Host.
        </p>
      </div>

      {/* Main Content Area: Diagram on Left/Top, Inspector on Right/Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        {/* Interactive Diagram Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>INTERACTIVE ARCHITECTURE MAP:</span>
            <span className="text-cyan-400">Click any component to inspect details</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 relative">
            {/* Row 1: Docker Client */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedId('client')}
                className={`w-full p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                  selectedId === 'client'
                    ? 'bg-sky-950/70 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] ring-2 ring-cyan-500/50'
                    : 'bg-slate-800/80 border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-cyan-400 border border-sky-500/30">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">Docker Client</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-900 text-sky-300">
                        CLI / REST API
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">Commands: docker run, build, pull, ps</span>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-mono hidden sm:inline">User Interface →</span>
              </button>
            </div>

            {/* Connecting Flow Arrow */}
            <div className="flex justify-center items-center gap-2 text-cyan-400 text-xs font-mono py-0.5">
              <span className="text-slate-500 hidden sm:inline">REST API / UNIX Socket</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Row 2: Docker Host & Daemon */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedId('daemon')}
                  className={`w-full p-3 rounded-lg border text-left transition-all duration-200 flex items-center justify-between ${
                    selectedId === 'daemon'
                      ? 'bg-sky-950/80 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] ring-1 ring-cyan-400'
                      : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-blue-500/20 text-sky-400 border border-blue-500/30">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white">Docker Host & Daemon (dockerd)</span>
                      <span className="block text-[11px] text-slate-400">Background engine managing execution & system calls</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-sky-300 font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700">
                    Host Core
                  </span>
                </button>
              </div>

              {/* Internal Objects Grid: Images, Containers, Volumes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {/* Images */}
                <button
                  onClick={() => setSelectedId('images')}
                  className={`p-2.5 rounded-lg border text-left transition-all duration-200 ${
                    selectedId === 'images'
                      ? 'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-500/40 shadow-md'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-indigo-400">
                    <Layers className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold text-white">Images</span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1">Read-only templates</p>
                </button>

                {/* Containers */}
                <button
                  onClick={() => setSelectedId('containers')}
                  className={`p-2.5 rounded-lg border text-left transition-all duration-200 ${
                    selectedId === 'containers'
                      ? 'bg-emerald-950/80 border-emerald-400 ring-2 ring-emerald-500/40 shadow-md'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-emerald-400">
                    <Box className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold text-white">Containers</span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1">Running isolated processes</p>
                </button>

                {/* Volumes */}
                <button
                  onClick={() => setSelectedId('volumes')}
                  className={`p-2.5 rounded-lg border text-left transition-all duration-200 ${
                    selectedId === 'volumes'
                      ? 'bg-amber-950/80 border-amber-400 ring-2 ring-amber-500/40 shadow-md'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-amber-400">
                    <HardDrive className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold text-white">Volumes</span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1">Persistent host storage</p>
                </button>
              </div>
            </div>

            {/* Connecting Flow Arrow */}
            <div className="flex justify-center items-center gap-2 text-pink-400 text-xs font-mono py-0.5">
              <span className="text-slate-500 hidden sm:inline">Push & Pull via HTTPS</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Row 3: Docker Registry */}
            <button
              onClick={() => setSelectedId('registry')}
              className={`w-full p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                selectedId === 'registry'
                  ? 'bg-pink-950/70 border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.3)] ring-2 ring-pink-500/50'
                  : 'bg-slate-800/80 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/30">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Docker Registry / Docker Hub</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950 text-pink-300">
                      Cloud Image Catalog
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">Global repository: Official & custom container images</span>
                </div>
              </div>
              <span className="text-xs text-pink-400 font-mono hidden sm:inline">Hub / ECR / GHCR</span>
            </button>
          </div>
        </div>

        {/* Component Deep-Dive Card Column */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  COMPONENT INSPECTOR
                </span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                {selectedComponent.badge}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <h3 className="text-xl font-bold text-white">{selectedComponent.name}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedComponent.fullDesc}
              </p>

              {/* Responsibilities */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Key Functions:
                </span>
                <ul className="mt-2 space-y-1.5">
                  {selectedComponent.keyFunctions.map((fn, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{fn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Example Command Box */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <span className="text-[11px] font-mono text-slate-500 uppercase">Related Command:</span>
            <div className="mt-1 p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between">
              <span>$ {selectedComponent.exampleCommand}</span>
              <Code className="w-3.5 h-3.5 text-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
