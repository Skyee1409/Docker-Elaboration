import React, { useState } from 'react';
import {
  Server,
  Box,
  Layers,
  Zap,
  Play,
  RotateCcw,
  Clock,
  HardDrive,
  Shield,
  Gauge,
} from 'lucide-react';

export const Slide05VMvsDocker: React.FC = () => {
  const [racing, setRacing] = useState(false);
  const [dockerBooted, setDockerBooted] = useState(false);
  const [vmProgress, setVmProgress] = useState(0);
  const [vmBooted, setVmBooted] = useState(false);

  const startRace = () => {
    setRacing(true);
    setDockerBooted(false);
    setVmBooted(false);
    setVmProgress(0);

    // Docker boots in 400ms!
    setTimeout(() => {
      setDockerBooted(true);
    }, 400);

    // VM boots gradually over 3.5 seconds
    const interval = setInterval(() => {
      setVmProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setVmBooted(true);
          setRacing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 320);
  };

  const metrics = [
    { title: 'Startup Time', vm: 'Minutes (30s – 2m)', docker: 'Milliseconds (<1s)', icon: <Clock className="w-4 h-4 text-cyan-400" /> },
    { title: 'Resource Usage', vm: 'High (Gigabytes per VM)', docker: 'Extremely Low (Megabytes)', icon: <HardDrive className="w-4 h-4 text-sky-400" /> },
    { title: 'Operating System', vm: 'Full Guest OS on each VM', docker: 'Shares Host OS Kernel', icon: <Layers className="w-4 h-4 text-indigo-400" /> },
    { title: 'Performance', vm: 'Overhead via Hypervisor', docker: 'Native Bare-metal Speed', icon: <Gauge className="w-4 h-4 text-emerald-400" /> },
    { title: 'Isolation Level', vm: 'Hardware-level (Strict)', docker: 'Process-level (Namespaces)', icon: <Shield className="w-4 h-4 text-amber-400" /> },
    { title: 'Portability', vm: 'Heavy image files (GBs)', docker: 'Lightweight layers (MBs)', icon: <Zap className="w-4 h-4 text-teal-400" /> },
  ];

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 05 • Architectural Face-Off
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Docker Containers vs Virtual Machines</h2>
        <p className="text-sm md:text-base text-slate-400 mt-1">
          Containers share the host OS kernel, eliminating the bloated overhead of guest operating systems.
        </p>
      </div>

      {/* Side-by-Side Architectural Stacks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-3">
        {/* LEFT: Virtual Machine Stack */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-amber-300 font-mono flex items-center gap-1.5">
              <Server className="w-4 h-4 text-amber-400" />
              VIRTUAL MACHINE (Heavyweight)
            </span>
            <span className="text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded bg-slate-800">GBs of RAM</span>
          </div>

          <div className="space-y-1.5 text-center text-xs font-mono">
            {/* Apps */}
            <div className="grid grid-cols-2 gap-1.5">
              <div className="p-2 rounded bg-amber-950/40 border border-amber-800/60 text-amber-200 font-bold">App A</div>
              <div className="p-2 rounded bg-amber-950/40 border border-amber-800/60 text-amber-200 font-bold">App B</div>
            </div>
            {/* Guest OSs */}
            <div className="grid grid-cols-2 gap-1.5">
              <div className="p-2 rounded bg-red-950/50 border border-red-800/60 text-red-200 font-semibold">
                Guest OS (Kernel, Systemd, Binaries ~2GB)
              </div>
              <div className="p-2 rounded bg-red-950/50 border border-red-800/60 text-red-200 font-semibold">
                Guest OS (Kernel, Systemd, Binaries ~2GB)
              </div>
            </div>
            {/* Hypervisor */}
            <div className="p-2 rounded bg-indigo-950/50 border border-indigo-700/60 text-indigo-300 font-semibold">
              Hypervisor (Type 1 or 2: VMware, VirtualBox, KVM)
            </div>
            {/* Host OS */}
            <div className="p-1.5 rounded bg-slate-800 text-slate-300">Host Operating System</div>
            {/* Hardware */}
            <div className="p-1.5 rounded bg-slate-950 text-slate-400 border border-slate-800 font-sans text-[11px]">
              Physical Server Hardware (CPU / RAM / Disk)
            </div>
          </div>
        </div>

        {/* RIGHT: Docker Container Stack */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_20px_rgba(14,165,233,0.1)]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-cyan-300 font-mono flex items-center gap-1.5">
              <Box className="w-4 h-4 text-cyan-400" />
              DOCKER CONTAINER (Lightweight)
            </span>
            <span className="text-[10px] text-cyan-300 font-mono px-2 py-0.5 rounded bg-sky-950 border border-sky-800">MBs of RAM</span>
          </div>

          <div className="space-y-1.5 text-center text-xs font-mono">
            {/* Container Apps */}
            <div className="grid grid-cols-3 gap-1.5">
              <div className="p-2 rounded bg-sky-950/60 border border-sky-500/40 text-cyan-200 font-bold">Container 1</div>
              <div className="p-2 rounded bg-sky-950/60 border border-sky-500/40 text-cyan-200 font-bold">Container 2</div>
              <div className="p-2 rounded bg-sky-950/60 border border-sky-500/40 text-cyan-200 font-bold">Container 3</div>
            </div>
            {/* Docker Engine */}
            <div className="p-2.5 rounded bg-gradient-to-r from-sky-600/30 to-cyan-500/30 border border-cyan-400/50 text-cyan-200 font-bold flex items-center justify-center gap-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              Docker Engine (dockerd + containerd)
            </div>
            {/* Shared Host OS */}
            <div className="p-2 rounded bg-slate-800 text-slate-200 font-semibold border border-slate-700">
              Host Operating System (Shared Linux Kernel)
            </div>
            {/* Hardware */}
            <div className="p-1.5 rounded bg-slate-950 text-slate-400 border border-slate-800 font-sans text-[11px]">
              Physical Server Hardware (CPU / RAM / Disk)
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Boot-Speed Race Simulator */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 my-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold font-mono text-white flex items-center gap-1.5">
              <Gauge className="w-4 h-4 text-cyan-400" />
              INTERACTIVE BENCHMARK: BOOT TIME RACE
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">— See the cold-start difference</span>
          </div>
          <button
            onClick={startRace}
            disabled={racing}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition shadow-sm"
          >
            {racing ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
            <span>Run Boot Race</span>
          </button>
        </div>

        <div className="space-y-2.5">
          {/* Docker Race Track */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span className="text-cyan-300 font-semibold">Docker Container (Process Spawn)</span>
              <span className={dockerBooted ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                {dockerBooted ? '⚡ READY in 0.4s' : 'Idle'}
              </span>
            </div>
            <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-300"
                style={{ width: dockerBooted ? '100%' : '0%' }}
              />
            </div>
          </div>

          {/* VM Race Track */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span className="text-amber-300 font-semibold">Virtual Machine (BIOS + Kernel + Systemd Boot)</span>
              <span className={vmBooted ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                {vmBooted ? 'Booted in 3.8s (simulated ~60s real)' : `${vmProgress}% booting...`}
              </span>
            </div>
            <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all duration-300"
                style={{ width: `${vmProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {metrics.map((m, i) => (
          <div key={i} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-center">
            <div className="flex justify-center mb-1">{m.icon}</div>
            <span className="text-[11px] font-bold text-slate-300 block">{m.title}</span>
            <div className="mt-1 text-[10px] font-mono">
              <span className="text-amber-400 block truncate">VM: {m.vm}</span>
              <span className="text-cyan-400 font-bold block truncate">Docker: {m.docker}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
