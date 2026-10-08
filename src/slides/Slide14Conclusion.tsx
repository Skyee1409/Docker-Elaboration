import React from 'react';
import {
  Code,
  Layers,
  Box,
  Cloud,
  ArrowRight,
  Globe,
  Bot,
  ShieldCheck,
} from 'lucide-react';

export const Slide14Conclusion: React.FC = () => {
  const evolution = [
    { era: 'Physical Servers', detail: 'Single OS per metal hardware (Slow & wasteful)', color: 'text-slate-500' },
    { era: 'Virtual Machines', detail: 'Hardware virtualization with heavy guest OSs', color: 'text-amber-400' },
    { era: 'Docker Containers', detail: 'Lightweight process isolation on shared kernel', color: 'text-cyan-400 font-bold' },
    { era: 'Kubernetes Orchestration', detail: 'Automated clustering, self-healing, scaling', color: 'text-sky-400' },
    { era: 'Cloud-Native & Serverless', detail: 'Ephemeral compute, WebAssembly & AI infrastructure', color: 'text-pink-400' },
  ];

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 14 • Horizon & Synthesis
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">The Future of Containerization</h2>
        <p className="text-sm md:text-base text-slate-400 mt-0.5">
          From developer convenience to the core operating backbone of worldwide cloud infrastructure.
        </p>
      </div>

      {/* The 5 Eras of Computing Architecture */}
      <div className="my-2 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
        <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
          THE EVOLUTIONARY JOURNEY:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-center">
          {evolution.map((e, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border flex flex-col justify-between ${
                idx === 2
                  ? 'bg-sky-950/70 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-1 ring-cyan-400/50'
                  : 'bg-slate-950/70 border-slate-800'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono text-slate-500 block">ERA 0{idx + 1}</span>
                <span className={`text-xs font-bold mt-1 block ${e.color}`}>{e.era}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Modern Trends Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 text-sky-400 mb-1">
            <Globe className="w-4 h-4" />
            <h4 className="text-xs font-bold text-white">Kubernetes (K8s)</h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            The standard orchestrator that manages fleets of thousands of Docker containers across global cloud clusters.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 text-purple-400 mb-1">
            <Bot className="w-4 h-4" />
            <h4 className="text-xs font-bold text-white">AI / ML Infrastructure</h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Standard containerization of complex GPU drivers, CUDA layers, and large language model inference APIs.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 text-emerald-400 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <h4 className="text-xs font-bold text-white">DevOps & SBOM Security</h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Automated image scanning, vulnerability patching, and Software Bill of Materials in GitHub Actions CI/CD.
          </p>
        </div>
      </div>

      {/* Final Visual Journey: CODE -> IMAGE -> CONTAINER -> CLOUD */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/70 via-slate-900 to-indigo-950/70 border border-cyan-500/40 shadow-2xl">
        <div className="flex flex-wrap items-center justify-around gap-3 text-center">
          <div className="flex items-center gap-2 text-cyan-300 font-mono font-bold text-sm">
            <Code className="w-5 h-5 text-cyan-400" />
            <span>CODE</span>
          </div>
          <ArrowRight className="w-5 h-5 text-cyan-500 animate-pulse hidden sm:block" />

          <div className="flex items-center gap-2 text-indigo-300 font-mono font-bold text-sm">
            <Layers className="w-5 h-5 text-indigo-400" />
            <span>IMAGE</span>
          </div>
          <ArrowRight className="w-5 h-5 text-cyan-500 animate-pulse hidden sm:block" />

          <div className="flex items-center gap-2 text-emerald-300 font-mono font-bold text-sm">
            <Box className="w-5 h-5 text-emerald-400" />
            <span>CONTAINER</span>
          </div>
          <ArrowRight className="w-5 h-5 text-cyan-500 animate-pulse hidden sm:block" />

          <div className="flex items-center gap-2 text-pink-300 font-mono font-bold text-sm">
            <Cloud className="w-5 h-5 text-pink-400" />
            <span>CLOUD</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800 text-center">
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto italic">
            &ldquo;Docker changed the way applications are built, shipped, and deployed by making environments truly portable, reproducible, and consistent.&rdquo;
          </p>
          <div className="mt-2 text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 bg-clip-text text-transparent font-sans tracking-wide">
            Build Once. Run Anywhere.
          </div>
        </div>
      </div>
    </div>
  );
};
