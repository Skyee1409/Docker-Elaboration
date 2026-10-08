import React, { useState, useEffect } from 'react';
import {
  Code,
  FileCode,
  Hammer,
  Layers,
  Play,
  Box,
  Rocket,
  RotateCcw,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const Slide11Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const steps = [
    {
      id: 0,
      title: 'Source Code',
      badge: 'Step 1',
      subtitle: 'React / Node.js project files',
      desc: 'Developer writes clean code, components, package.json dependencies, and tests.',
      command: 'git commit -m "feat: complete user auth"',
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      color: 'from-cyan-500/20 to-sky-500/10 border-cyan-500/50',
    },
    {
      id: 1,
      title: 'Dockerfile',
      badge: 'Step 2',
      subtitle: 'The Container Blueprint',
      desc: 'Declarative script defining the runtime environment (node:22), working dir, and startup commands.',
      command: 'cat Dockerfile',
      icon: <FileCode className="w-5 h-5 text-amber-400" />,
      color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/50',
    },
    {
      id: 2,
      title: 'docker build',
      badge: 'Step 3',
      subtitle: 'Layer Compilation & Cache',
      desc: 'Docker engine parses the Dockerfile, downloads base image layers, runs npm install, and packages layers.',
      command: 'docker build -t webapp:v1 .',
      icon: <Hammer className="w-5 h-5 text-sky-400" />,
      color: 'from-sky-500/20 to-blue-500/10 border-sky-500/50',
    },
    {
      id: 3,
      title: 'Docker Image',
      badge: 'Step 4',
      subtitle: 'Immutable Packaged Artifact',
      desc: 'Self-sufficient, cryptographic read-only template ready to be deployed or pushed to Docker Hub.',
      command: 'docker images | grep webapp',
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      color: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/50',
    },
    {
      id: 4,
      title: 'docker run',
      badge: 'Step 5',
      subtitle: 'Process Instantiation',
      desc: 'Docker allocates cgroups, PID/Network namespaces, and mounts a thin read/write layer on top of the image.',
      command: 'docker run -d -p 3000:3000 --name webapp webapp:v1',
      icon: <Play className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/50',
    },
    {
      id: 5,
      title: 'Active Container',
      badge: 'Step 6',
      subtitle: 'Isolated Running Process',
      desc: 'Node.js server boots inside container sandbox in 300ms, listening on internal port 3000.',
      command: 'docker ps',
      icon: <Box className="w-5 h-5 text-teal-400" />,
      color: 'from-teal-500/20 to-emerald-500/10 border-teal-500/50',
    },
    {
      id: 6,
      title: 'Production Deploy',
      badge: 'Step 7',
      subtitle: 'Cloud / Kubernetes / Edge',
      desc: 'Container runs seamlessly across AWS ECS, Google Cloud Run, Azure, or Kubernetes clusters with 100% parity.',
      command: 'curl https://myapp.production.com',
      icon: <Rocket className="w-5 h-5 text-pink-400" />,
      color: 'from-pink-500/20 to-rose-500/10 border-pink-500/50',
    },
  ];

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsAutoPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1600);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 11 • End-To-End Pipeline
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Complete Docker Workflow</h2>
            <p className="text-sm md:text-base text-slate-400 mt-0.5">
              From raw source code on developer laptop to a high-availability cloud deployment.
            </p>
          </div>

          {/* Interactive Player Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveStep(0);
                setIsAutoPlaying(true);
              }}
              disabled={isAutoPlaying}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold font-mono transition shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            >
              {isAutoPlaying ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoPlaying ? 'Playing Pipeline...' : 'Auto-Play Pipeline'}</span>
            </button>
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveStep(0);
              }}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Large Glowing Animated Pipeline (All 7 Steps) */}
      <div className="my-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-x-auto">
        <div className="min-w-[780px] flex items-center justify-between relative">
          {/* Background Track Line */}
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-slate-800 z-0">
            <div
              className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-pink-500 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* 7 Pipeline Nodes */}
          {steps.map((s, idx) => {
            const isCompleted = idx <= activeStep;
            const isCurrent = idx === activeStep;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveStep(idx);
                }}
                className="group relative z-10 flex flex-col items-center focus:outline-none"
              >
                {/* Node Circle */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? 'bg-sky-500 text-slate-950 ring-4 ring-cyan-400/50 scale-110 shadow-[0_0_25px_rgba(56,189,248,0.5)]'
                      : isCompleted
                      ? 'bg-slate-800 text-cyan-400 border border-cyan-500/60'
                      : 'bg-slate-900 text-slate-600 border border-slate-800 group-hover:border-slate-700'
                  }`}
                >
                  {s.icon}
                </div>

                {/* Node Label */}
                <span
                  className={`mt-2 font-mono text-[11px] font-bold text-center block ${
                    isCurrent ? 'text-cyan-300' : isCompleted ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {s.title}
                </span>

                <span className="text-[9px] font-mono text-slate-500">{s.badge}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Deep-Dive Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-br bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950 text-cyan-300 border border-sky-800 font-bold">
              {steps[activeStep].badge} OF 7
            </span>
            <span className="text-xs font-mono text-slate-400">
              {steps[activeStep].subtitle}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
            {steps[activeStep].title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {steps[activeStep].desc}
          </p>
        </div>

        {/* Command terminal box for this phase */}
        <div className="w-full md:w-auto min-w-[280px] bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs">
          <span className="text-[10px] text-slate-500 uppercase block mb-1">EXECUTION COMMAND:</span>
          <div className="text-cyan-300 flex items-center gap-1.5 font-bold">
            <span className="text-emerald-400">$</span>
            <span>{steps[activeStep].command}</span>
          </div>
          <div className="mt-2 text-[10px] text-slate-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Standardized CI/CD reproducible</span>
          </div>
        </div>
      </div>

      {/* Real-World Context Callout */}
      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Real-world example: A React/Next.js frontend + Node.js Express API + PostgreSQL backend.</span>
        </div>
        <span className="text-cyan-400 hidden sm:inline">100% Environment Parity</span>
      </div>
    </div>
  );
};
