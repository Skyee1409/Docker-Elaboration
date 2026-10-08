import React, { useState } from 'react';
import {
  Box,
  Play,
  Pause,
  Square,
  Trash2,
  RefreshCw,
  Shield,
  Network,
  HardDrive,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react';

type ContainerState = 'created' | 'running' | 'paused' | 'stopped' | 'removed';

export const Slide07Containers: React.FC = () => {
  const [containerState, setContainerState] = useState<ContainerState>('running');

  const stateDetails: Record<
    ContainerState,
    { label: string; badge: string; desc: string; color: string; indicator: string }
  > = {
    created: {
      label: 'Created',
      badge: 'docker create',
      desc: 'Container metadata, isolated rootfs, and network namespace allocated, but the main application process is not yet executing.',
      color: 'border-sky-500/50 bg-sky-950/40 text-sky-300',
      indicator: 'bg-sky-400',
    },
    running: {
      label: 'Running',
      badge: 'docker run / start',
      desc: 'Primary process PID 1 is executing inside the namespace. Network ports are open and receiving traffic.',
      color: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300',
      indicator: 'bg-emerald-400 animate-pulse',
    },
    paused: {
      label: 'Paused',
      badge: 'docker pause',
      desc: 'All processes in the container are frozen in place using the cgroups freezer subsystem. CPU usage drops to 0%.',
      color: 'border-amber-500/50 bg-amber-950/40 text-amber-300',
      indicator: 'bg-amber-400',
    },
    stopped: {
      label: 'Stopped / Exited',
      badge: 'docker stop (SIGTERM/SIGKILL)',
      desc: 'The process has exited. The container is halted, but its filesystem read/write layer remains intact on disk.',
      color: 'border-rose-500/50 bg-rose-950/40 text-rose-300',
      indicator: 'bg-rose-500',
    },
    removed: {
      label: 'Removed',
      badge: 'docker rm',
      desc: 'Container is destroyed. The ephemeral read/write layer and virtual network interfaces have been garbage collected.',
      color: 'border-slate-700 bg-slate-900/60 text-slate-400',
      indicator: 'bg-slate-600',
    },
  };

  const isolationPillars = [
    {
      title: 'PID & User Isolation',
      desc: 'Container process appears as PID 1 inside, while the host sees it safely as an ordinary unprivileged process.',
      icon: <Shield className="w-4 h-4 text-cyan-400" />,
    },
    {
      title: 'Port Mapping (-p)',
      desc: 'Forwards external host ports (e.g., 8080) to the container internal listening port (e.g., 80) via NAT/iptables.',
      icon: <Network className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: 'Ephemeral Filesystem',
      desc: 'A thin, temporary Read/Write layer on top of the immutable image. Deleting the container clears this layer.',
      icon: <HardDrive className="w-4 h-4 text-amber-400" />,
    },
    {
      title: 'Control Groups (cgroups)',
      desc: 'Strictly caps hardware limits so no container can starve the host of CPU or memory (--memory="512m").',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
    },
  ];

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 07 • Live Execution Unit
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">What is a Container?</h2>
        <p className="text-sm md:text-base text-slate-400 mt-1">
          &ldquo;A container is a <span className="text-cyan-400 font-semibold">running, isolated instance</span> of a Docker image.&rdquo;
        </p>
      </div>

      {/* Blueprint to Container Equation */}
      <div className="my-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>IMAGE (Blueprint / Class)</span>
        </div>
        <div className="flex items-center gap-1 text-cyan-400 font-bold">
          <span>+ docker run</span>
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <Box className="w-4 h-4 text-emerald-400" />
          <span>CONTAINER (Active Instance / Object)</span>
        </div>
      </div>

      {/* Interactive Container Lifecycle Controller */}
      <div className="my-2 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${stateDetails[containerState].indicator}`} />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              CONTAINER LIFECYCLE CONTROLLER
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              STATUS: {stateDetails[containerState].label.toUpperCase()}
            </span>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            Click controls below to alter state
          </div>
        </div>

        {/* State Machine Visualization Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-4 text-center">
          {(['created', 'running', 'paused', 'stopped', 'removed'] as ContainerState[]).map((st) => {
            const isCurrent = containerState === st;
            return (
              <div
                key={st}
                className={`p-2.5 rounded-xl border text-xs font-mono transition-all duration-200 ${
                  isCurrent
                    ? `${stateDetails[st].color} ring-2 ring-cyan-400/50 shadow-md font-bold scale-105`
                    : 'bg-slate-950/60 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className={`w-2 h-2 rounded-full ${isCurrent ? stateDetails[st].indicator : 'bg-slate-700'}`} />
                  <span className="capitalize">{st}</span>
                </div>
                <span className="text-[9px] block text-slate-400 truncate">
                  {stateDetails[st].badge}
                </span>
              </div>
            );
          })}
        </div>

        {/* Live Controller Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-slate-800/80">
          <button
            onClick={() => setContainerState('running')}
            disabled={containerState === 'running'}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition ${
              containerState === 'running'
                ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>docker start / run</span>
          </button>

          <button
            onClick={() => setContainerState(containerState === 'paused' ? 'running' : 'paused')}
            disabled={containerState === 'stopped' || containerState === 'removed' || containerState === 'created'}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition ${
              containerState === 'stopped' || containerState === 'removed' || containerState === 'created'
                ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-amber-600 hover:bg-amber-500 text-white shadow-sm'
            }`}
          >
            <Pause className="w-3.5 h-3.5" />
            <span>{containerState === 'paused' ? 'docker unpause' : 'docker pause'}</span>
          </button>

          <button
            onClick={() => setContainerState('stopped')}
            disabled={containerState === 'stopped' || containerState === 'removed'}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition ${
              containerState === 'stopped' || containerState === 'removed'
                ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-rose-600 hover:bg-rose-500 text-white shadow-sm'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            <span>docker stop</span>
          </button>

          <button
            onClick={() => setContainerState('removed')}
            disabled={containerState === 'removed' || containerState === 'running'}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition ${
              containerState === 'removed' || containerState === 'running'
                ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800 hover:bg-slate-700 text-rose-300 border border-rose-500/30'
            }`}
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>docker rm</span>
          </button>

          <button
            onClick={() => setContainerState('created')}
            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-sky-950 hover:bg-sky-900 text-cyan-300 border border-sky-800 transition flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* State explanation callout */}
        <div className="mt-3 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
          <span className="font-bold text-cyan-400">Current State Behavior: </span>
          {stateDetails[containerState].desc}
        </div>
      </div>

      {/* 4 Pillars of Container Isolation */}
      <div>
        <div className="text-xs font-mono text-slate-400 mb-2">CORE ISOLATION MECHANISMS (LINUX PRIMITIVES):</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {isolationPillars.map((p, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="p-1 rounded bg-slate-800">{p.icon}</div>
                <h4 className="text-xs font-bold text-white">{p.title}</h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
