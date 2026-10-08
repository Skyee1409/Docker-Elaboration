import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Laptop,
  Server,
  ArrowRight,
  RefreshCw,
  Cpu,
  Layers,
  Settings,
  ShieldAlert,
} from 'lucide-react';

export const Slide02WhyDocker: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'without' | 'with'>('without');
  const [simulating, setSimulating] = useState(false);
  const [simResult, setSimResult] = useState<'success' | 'failure' | null>(null);

  const runSimulation = (mode: 'without' | 'with') => {
    setSimulating(true);
    setSimResult(null);
    setTimeout(() => {
      setSimulating(false);
      setSimResult(mode === 'with' ? 'success' : 'failure');
    }, 1200);
  };

  const problems = [
    {
      title: 'Dependency Conflicts',
      desc: 'App A needs Python 3.9, App B needs Python 3.12. Installing both breaks system libraries.',
      icon: <Layers className="w-4 h-4 text-rose-400" />,
    },
    {
      title: 'Environment Mismatch',
      desc: 'Developed on macOS with Homebrew, tested on Windows, deployed to Linux with missing C headers.',
      icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
    },
    {
      title: 'Difficult Deployment',
      desc: 'Manual 40-step setup checklists prone to human error and missed configuration keys.',
      icon: <Server className="w-4 h-4 text-orange-400" />,
    },
    {
      title: '"Works on My Machine"',
      desc: 'The developer runs it smoothly, but production crashes immediately due to subtle OS differences.',
      icon: <ShieldAlert className="w-4 h-4 text-red-400" />,
    },
    {
      title: 'Slow Onboarding',
      desc: 'New hires waste 3 to 5 days just getting local compilers, databases, and dependencies configured.',
      icon: <Settings className="w-4 h-4 text-yellow-400" />,
    },
    {
      title: 'Configuration Drift',
      desc: 'Servers slowly change over time through manual patches until nobody knows how to rebuild them.',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
    },
  ];

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 02 • The Problem Space
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Do We Need Docker?</h2>
        <p className="text-sm md:text-base text-slate-400 mt-1">
          The traditional software delivery crisis: The infamous <span className="text-rose-400 font-semibold italic">"It works on my machine!"</span> syndrome.
        </p>
      </div>

      {/* Visual Pipeline of the Problem */}
      <div className="my-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
          <span>THE CLASSICAL DEPLOYMENT BREAKDOWN:</span>
          <span className="text-rose-400 font-semibold">Environment Drift in Action</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center text-center">
          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex flex-col items-center">
            <Laptop className="w-6 h-6 text-sky-400 mb-1" />
            <span className="text-xs font-bold text-slate-200">Developer Machine</span>
            <span className="text-[10px] text-emerald-400 font-mono mt-0.5">Works perfectly</span>
          </div>

          <div className="flex justify-center text-slate-600">
            <ArrowRight className="w-5 h-5 animate-pulse text-cyan-400" />
          </div>

          <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-900/60 flex flex-col items-center">
            <AlertTriangle className="w-6 h-6 text-rose-400 mb-1" />
            <span className="text-xs font-bold text-rose-200">Environment Mismatch</span>
            <span className="text-[10px] text-rose-400 font-mono mt-0.5">OS / Deps / Config</span>
          </div>

          <div className="flex justify-center text-slate-600">
            <ArrowRight className="w-5 h-5 animate-pulse text-rose-400" />
          </div>

          <div className="p-3 rounded-lg bg-red-950/50 border border-red-800/80 flex flex-col items-center">
            <XCircle className="w-6 h-6 text-red-500 mb-1" />
            <span className="text-xs font-bold text-red-200">Production Failure</span>
            <span className="text-[10px] text-red-400 font-mono mt-0.5">Crash at 2:00 AM</span>
          </div>
        </div>
      </div>

      {/* Interactive Comparison & Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 6 Problems Grid */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
              6 Core Pain Points Before Containerization
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {problems.map((p, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1 rounded bg-slate-800">{p.icon}</div>
                  <h4 className="text-xs font-bold text-slate-200">{p.title}</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive Simulator (WITHOUT vs WITH DOCKER) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-200 font-mono">LIVE COMPARISON</span>
              <div className="flex p-0.5 bg-slate-950 rounded-lg border border-slate-800">
                <button
                  onClick={() => {
                    setActiveTab('without');
                    setSimResult(null);
                  }}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition ${
                    activeTab === 'without'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Without Docker
                </button>
                <button
                  onClick={() => {
                    setActiveTab('with');
                    setSimResult(null);
                  }}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition ${
                    activeTab === 'with'
                      ? 'bg-sky-500/20 text-cyan-300 border border-sky-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  With Docker
                </button>
              </div>
            </div>

            {activeTab === 'without' ? (
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-rose-950/20 border border-rose-900/40 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-rose-300">Bare Metal / VM Manual Config</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Each machine has different GLIBC versions, Node runtimes, and environment variables.
                    </p>
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-950/60 font-mono text-[11px] text-rose-400">
                  $ python server.py<br />
                  <span className="text-red-500">
                    ImportError: libssl.so.1.1: cannot open shared object file!
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-sky-950/30 border border-sky-800/40 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-cyan-300">Standardized Containerized Image</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Code, runtime, libraries, and exact dependencies packaged into an identical immutable artifact.
                    </p>
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-950/60 font-mono text-[11px] text-cyan-300">
                  $ docker run -p 8080:8080 myapp:1.0<br />
                  <span className="text-emerald-400">
                    ✔ Container started! Listening on port 8080 with 100% parity.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Simulation Button */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <button
              onClick={() => runSimulation(activeTab)}
              disabled={simulating}
              className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition ${
                activeTab === 'without'
                  ? 'bg-rose-600/80 hover:bg-rose-500 text-white'
                  : 'bg-sky-600 hover:bg-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]'
              }`}
            >
              {simulating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Deploying to Staging & Production...</span>
                </>
              ) : (
                <>
                  <span>Simulate Deployment ({activeTab === 'without' ? 'Without' : 'With'} Docker)</span>
                </>
              )}
            </button>

            {simResult && (
              <div
                className={`mt-2.5 p-2 rounded-lg text-xs font-mono flex items-center gap-2 animate-in fade-in duration-200 ${
                  simResult === 'success'
                    ? 'bg-emerald-950/50 border border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/50 border border-rose-500/40 text-rose-300'
                }`}
              >
                {simResult === 'success' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Deployment SUCCESS! Identical environment verified across Mac, Windows & Cloud.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Deployment FAILED! Missing system dependencies on target Ubuntu server.</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
