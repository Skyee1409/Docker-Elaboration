import React, { useState } from 'react';
import {
  Cloud,
  Laptop,
  Server,
  ArrowRight,
  UploadCloud,
  DownloadCloud,
  Tag,
  FolderGit2,
  Play,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

export const Slide09DockerHub: React.FC = () => {
  const [animatingStep, setAnimatingStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const startAnimation = () => {
    setIsPlaying(true);
    setAnimatingStep(1); // Developer builds
    setTimeout(() => setAnimatingStep(2), 1000); // Image pushed to Docker Hub
    setTimeout(() => setAnimatingStep(3), 2000); // Stored in Docker Hub
    setTimeout(() => setAnimatingStep(4), 3000); // Server pulls from Docker Hub
    setTimeout(() => {
      setAnimatingStep(5); // Running in production
      setIsPlaying(false);
    }, 4000);
  };

  const concepts = [
    {
      term: 'Push',
      code: 'docker push user/app:1.0',
      desc: 'Uploads your locally built image and layers to the remote registry.',
      icon: <UploadCloud className="w-4 h-4 text-cyan-400" />,
    },
    {
      term: 'Pull',
      code: 'docker pull nginx:alpine',
      desc: 'Downloads an image from the registry to your local Docker host cache.',
      icon: <DownloadCloud className="w-4 h-4 text-emerald-400" />,
    },
    {
      term: 'Repository',
      code: 'docker.io/library/postgres',
      desc: 'A collection of related images with identical names but different version tags.',
      icon: <FolderGit2 className="w-4 h-4 text-indigo-400" />,
    },
    {
      term: 'Tag',
      code: ':latest, :22-alpine, :v1.4',
      desc: 'A human-readable label pointing to a specific cryptographic image SHA256 digest.',
      icon: <Tag className="w-4 h-4 text-amber-400" />,
    },
  ];

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 09 • Worldwide Image Sharing
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Docker Hub & Container Registry</h2>
        <p className="text-sm md:text-base text-slate-400 mt-1">
          Docker Hub is the official cloud-based registry for discovering, storing, and distributing container images.
        </p>
      </div>

      {/* Interactive Cloud Distribution Pipeline */}
      <div className="my-2 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Cloud className="w-4 h-4 text-cyan-400" />
            GLOBAL REGISTRY FLOW SIMULATOR
          </span>
          <button
            onClick={startAnimation}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold font-mono transition shadow-sm"
          >
            {isPlaying ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
            <span>Animate Flow</span>
          </button>
        </div>

        {/* Pipeline Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center my-4">
          {/* Node 1: Developer */}
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              animatingStep === 1
                ? 'bg-sky-950/80 border-cyan-400 ring-2 ring-cyan-500/40 scale-105'
                : 'bg-slate-800/80 border-slate-700'
            }`}
          >
            <Laptop className="w-7 h-7 text-cyan-400 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-white block">Developer Workstation</span>
            <span className="text-[10px] font-mono text-slate-400 block mt-1">docker build -t app:1.0</span>
          </div>

          {/* Arrow 1: Push */}
          <div className="flex flex-col items-center justify-center text-xs font-mono text-cyan-400">
            <span className="text-[11px] font-bold text-cyan-300">docker push</span>
            <ArrowRight className="w-5 h-5 animate-pulse" />
            <span className="text-[9px] text-slate-500">HTTPS Upload</span>
          </div>

          {/* Node 2: Docker Hub Cloud Registry */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              animatingStep === 2 || animatingStep === 3
                ? 'bg-gradient-to-br from-sky-900/40 to-pink-900/40 border-pink-400 ring-2 ring-pink-500/40 scale-105 shadow-[0_0_20px_rgba(236,72,153,0.3)]'
                : 'bg-slate-950/90 border-slate-700'
            }`}
          >
            <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400 w-fit mx-auto mb-1 border border-pink-500/30">
              <Cloud className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold text-white block">Docker Hub (Cloud Registry)</span>
            <span className="text-[10px] font-mono text-pink-300 block mt-0.5">hub.docker.com</span>
            <span className="text-[9px] text-slate-400 block">Public & Private Repos</span>
          </div>

          {/* Arrow 2: Pull */}
          <div className="flex flex-col items-center justify-center text-xs font-mono text-emerald-400">
            <span className="text-[11px] font-bold text-emerald-300">docker pull</span>
            <ArrowRight className="w-5 h-5 animate-pulse" />
            <span className="text-[9px] text-slate-500">Layer Download</span>
          </div>

          {/* Node 3: Production Server */}
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              animatingStep >= 4
                ? 'bg-emerald-950/80 border-emerald-400 ring-2 ring-emerald-500/40 scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                : 'bg-slate-800/80 border-slate-700'
            }`}
          >
            <Server className="w-7 h-7 text-emerald-400 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-white block">Production Server / Teammate</span>
            <span className="text-[10px] font-mono text-slate-400 block mt-1">docker run -d app:1.0</span>
          </div>
        </div>

        {/* Live Status readout */}
        <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-center flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span>
            {animatingStep === 0 && 'Ready. Click "Animate Flow" to simulate global container distribution.'}
            {animatingStep === 1 && 'Step 1: Developer compiles code into local image layers...'}
            {animatingStep === 2 && 'Step 2: Pushing cryptographic layers to Docker Hub over HTTPS...'}
            {animatingStep === 3 && 'Step 3: Image successfully indexed in Docker Hub repository!'}
            {animatingStep === 4 && 'Step 4: Production server downloads image and verifies checksums...'}
            {animatingStep === 5 && 'Step 5: Application running with 100% environment parity in production!'}
          </span>
        </div>
      </div>

      {/* 4 Core Registry Concepts */}
      <div>
        <div className="text-xs font-mono text-slate-400 mb-2">KEY VOCABULARY & COMMAND EXAMPLES:</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {concepts.map((c, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="p-1 rounded bg-slate-800">{c.icon}</div>
                <h4 className="text-xs font-bold text-white">{c.term}</h4>
              </div>
              <p className="text-[11px] text-slate-400 mb-2 leading-relaxed">{c.desc}</p>
              <div className="p-1.5 rounded bg-slate-950 border border-slate-800 font-mono text-[10px] text-cyan-300">
                $ {c.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
