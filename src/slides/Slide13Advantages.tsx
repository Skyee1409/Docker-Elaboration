import React from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';

export const Slide13Advantages: React.FC = () => {
  const advantages = [
    { title: 'Lightweight & Minimal Overhead', desc: 'No guest OS footprint; containers measure megabytes instead of gigabytes.' },
    { title: 'Sub-Second Startup Speed', desc: 'Processes launch almost instantaneously without waiting for OS boot loaders.' },
    { title: 'Extreme Portability', desc: 'Runs identically on macOS laptops, Windows workstations, and Linux cloud servers.' },
    { title: 'Environment Consistency', desc: 'Completely eliminates "works on my machine" bugs across dev, test, and prod.' },
    { title: 'Streamlined Deployment', desc: 'Package entire apps with dependencies into a single immutable image artifact.' },
    { title: 'High Density & Scalability', desc: 'Run hundreds of containers on a single host with near-zero idle resource drain.' },
    { title: 'Efficient Resource Utilization', desc: 'Dynamic CPU and RAM allocation sharing the host kernel directly.' },
  ];

  const limitations = [
    { title: 'Security Configuration Required', desc: 'Containers share host kernel; misconfigured root containers can compromise the host.' },
    { title: 'Persistent Storage Complexity', desc: 'Containers are ephemeral by default; databases require careful volume management.' },
    { title: 'Complex Networking at Scale', desc: 'Managing multi-host overlay networks, DNS, and bridge routing requires expertise.' },
    { title: 'Learning Curve for Beginners', desc: 'Requires understanding CLI tooling, daemon mechanics, cgroups, and Dockerfile caching.' },
    { title: 'Not Ideal for Monolithic Legacy GUIs', desc: 'Engineered primarily for headless services; desktop graphical apps are cumbersome.' },
  ];

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 13 • Engineering Trade-offs
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Docker: Strengths & Limitations</h2>
        <p className="text-sm md:text-base text-slate-400 mt-0.5">
          An honest technical evaluation of containerization advantages and real-world engineering constraints.
        </p>
      </div>

      {/* Two-Column Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2 items-start">
        {/* ADVANTAGES COLUMN */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-mono">
              <CheckCircle2 className="w-5 h-5" />
              <span>ADVANTAGES & STRENGTHS</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800">
              7 Key Superpowers
            </span>
          </div>

          <div className="space-y-2">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 transition flex items-start gap-2.5"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px]">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{adv.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIMITATIONS COLUMN */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm font-mono">
              <AlertTriangle className="w-5 h-5" />
              <span>REALISTIC LIMITATIONS & TRADEOFFS</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800">
              5 Constraints to Note
            </span>
          </div>

          <div className="space-y-2">
            {limitations.map((lim, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/40 transition flex items-start gap-2.5"
              >
                <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                  ⚠
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{lim.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">{lim.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Verdict Summary */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-indigo-950/60 border border-sky-500/30 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5 text-slate-300">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong className="text-white">Engineering Takeaway: </strong>
            Docker is not a silver bullet for everything, but for modern web apps, APIs, and microservices, the consistency and developer velocity overwhelmingly outshine the overhead.
          </span>
        </div>
        <span className="text-cyan-400 font-mono text-[11px] hidden lg:inline whitespace-nowrap">
          Balanced Evaluation
        </span>
      </div>
    </div>
  );
};
