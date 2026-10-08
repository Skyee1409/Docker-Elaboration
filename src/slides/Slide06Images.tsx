import React, { useState } from 'react';
import {
  Layers,
  FileCode,
  Box,
  ArrowRight,
  Database,
  Cpu,
  Globe,
  Check,
  Copy,
  Info,
} from 'lucide-react';

export const Slide06Images: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(3);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const layers = [
    {
      level: 4,
      name: 'Application Source Code & Configuration',
      command: 'COPY . .',
      size: '12 MB',
      desc: 'Your application business logic, routes, and config files. Changes frequently during active development.',
      color: 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300',
    },
    {
      level: 3,
      name: 'Project Dependencies & Packages',
      command: 'RUN npm install --omit=dev',
      size: '85 MB',
      desc: 'All third-party modules. Cached effectively if package.json has not been modified.',
      color: 'bg-indigo-950/60 border-indigo-500/50 text-indigo-300',
    },
    {
      level: 2,
      name: 'Application Runtime Environment',
      command: 'WORKDIR /app',
      size: '30 MB',
      desc: 'Node.js v22 binary, npm package manager, and Linux environment variables.',
      color: 'bg-sky-950/60 border-sky-500/50 text-sky-300',
    },
    {
      level: 1,
      name: 'Base Operating System Image',
      command: 'FROM alpine:3.20',
      size: '5.2 MB',
      desc: 'Minimal Alpine Linux root filesystem containing musl-libc and BusyBox userland utilities.',
      color: 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300',
    },
  ];

  const popularImages = [
    { name: 'node:22-alpine', size: '145MB', role: 'JavaScript/TypeScript Runtime', icon: <Cpu className="w-4 h-4 text-emerald-400" />, pullCmd: 'docker pull node:22-alpine' },
    { name: 'python:3.12-slim', size: '128MB', role: 'Python backend & AI APIs', icon: <FileCode className="w-4 h-4 text-amber-400" />, pullCmd: 'docker pull python:3.12-slim' },
    { name: 'nginx:alpine', size: '42MB', role: 'High-perf reverse proxy & static host', icon: <Globe className="w-4 h-4 text-sky-400" />, pullCmd: 'docker pull nginx:alpine' },
    { name: 'postgres:18', size: '380MB', role: 'Relational database engine', icon: <Database className="w-4 h-4 text-indigo-400" />, pullCmd: 'docker pull postgres:18' },
  ];

  const copyPull = (cmd: string, index: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 06 • The Immutable Blueprint
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">What is a Docker Image?</h2>
        <p className="text-sm md:text-base text-slate-400 mt-1">
          &ldquo;A Docker image is a <span className="text-cyan-400 font-semibold">read-only, layered template</span> used as a blueprint to create running containers.&rdquo;
        </p>
      </div>

      {/* Build to Run Pipeline Banner */}
      <div className="my-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-around gap-2 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <FileCode className="w-4 h-4 text-amber-400" />
          <span className="font-bold">Dockerfile</span>
        </div>
        <ArrowRight className="w-4 h-4 text-cyan-500 animate-pulse" />
        <div className="flex items-center gap-2 text-cyan-300 bg-sky-950/80 px-2.5 py-1 rounded border border-sky-800">
          <span>docker build</span>
        </div>
        <ArrowRight className="w-4 h-4 text-cyan-500 animate-pulse" />
        <div className="flex items-center gap-2 text-slate-200">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span className="font-bold">Docker Image (Read-Only)</span>
        </div>
        <ArrowRight className="w-4 h-4 text-cyan-500 animate-pulse" />
        <div className="flex items-center gap-2 text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
          <span>docker run</span>
        </div>
        <ArrowRight className="w-4 h-4 text-cyan-500 animate-pulse" />
        <div className="flex items-center gap-2 text-teal-300 font-bold">
          <Box className="w-4 h-4 text-teal-400" />
          <span>Container (R/W Layer)</span>
        </div>
      </div>

      {/* Main Grid: Interactive Layer Stack & Layer Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-2 items-center">
        {/* Layer Stack Diagram */}
        <div className="lg:col-span-7 flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
            <span>UNION FILESYSTEM (LAYER STACK):</span>
            <span className="text-cyan-400">Click a layer to inspect</span>
          </div>

          {layers.map((layer, idx) => (
            <button
              key={layer.level}
              onClick={() => setSelectedLayer(idx)}
              className={`w-full p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                selectedLayer === idx
                  ? `${layer.color} shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-2 ring-cyan-400/50`
                  : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800">
                  Layer {layer.level}
                </span>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-100 block">
                    {layer.name}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300">
                    Instruction: {layer.command}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 shrink-0">{layer.size}</span>
            </button>
          ))}

          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center text-xs text-slate-400 font-mono">
            👇 Bottom Layer is read-only Base OS • Subsequent layers only store filesystem deltas!
          </div>
        </div>

        {/* Selected Layer Info Inspector */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-cyan-400">
              <Info className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                LAYER CACHE & UNIONFS
              </span>
            </div>

            <div className="mt-3 space-y-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                Layer {layers[selectedLayer].level} of 4
              </span>
              <h4 className="text-base font-bold text-white">
                {layers[selectedLayer].name}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {layers[selectedLayer].desc}
              </p>

              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs">
                <span className="text-slate-500 block text-[10px]">CORRESPONDING DOCKERFILE COMMAND:</span>
                <span className="text-cyan-300 font-bold">{layers[selectedLayer].command}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
            <span className="font-bold text-slate-300">Why Layer Caching Matters:</span>
            <p className="text-[11px] text-slate-400 mt-1">
              If layers 1, 2, and 3 haven't changed, Docker reuses them instantly (0.1s build)! Only modified layers are rebuilt.
            </p>
          </div>
        </div>
      </div>

      {/* Code-Style Cards for Official Base Images */}
      <div>
        <div className="text-xs font-mono text-slate-400 mb-2">POPULAR OFFICIAL DOCKER HUB BASE IMAGES:</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {popularImages.map((img, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-300">
                    {img.icon}
                    <span>{img.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-800">
                    {img.size}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">{img.role}</p>
              </div>

              <button
                onClick={() => copyPull(img.pullCmd, i)}
                className="mt-2 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 hover:text-cyan-300 flex items-center justify-between transition"
                title="Click to copy pull command"
              >
                <span className="truncate">$ {img.pullCmd}</span>
                {copiedIndex === i ? (
                  <Check className="w-3 h-3 text-emerald-400 shrink-0 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 shrink-0 ml-1" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
