import React, { useState } from 'react';
import {
  Globe,
  Cloud,
  Network,
  GitBranch,
  Settings,
  FlaskConical,
  BrainCircuit,
  Database,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export const Slide12Applications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dev' | 'ops' | 'data'>('all');

  const cards = [
    {
      category: 'dev',
      icon: <Globe className="w-5 h-5 text-sky-400" />,
      title: 'Web Development',
      desc: 'Instant zero-configuration local stack: launch frontend, backend, and redis in seconds.',
      tag: 'Local Stack',
    },
    {
      category: 'ops',
      icon: <Cloud className="w-5 h-5 text-cyan-400" />,
      title: 'Cloud Deployment',
      desc: 'Deploy identical images directly to AWS ECS, Google Cloud Run, Azure, and DigitalOcean.',
      tag: 'Serverless / Cloud',
    },
    {
      category: 'ops',
      icon: <Network className="w-5 h-5 text-indigo-400" />,
      title: 'Microservices Architecture',
      desc: 'Decompose monolithic apps into dozens of independently deployable and scalable service containers.',
      tag: 'Distributed Systems',
    },
    {
      category: 'ops',
      icon: <GitBranch className="w-5 h-5 text-emerald-400" />,
      title: 'CI/CD Automation',
      desc: 'Clean, disposable build & test environments in GitHub Actions, GitLab CI, and Jenkins.',
      tag: 'Continuous Delivery',
    },
    {
      category: 'ops',
      icon: <Settings className="w-5 h-5 text-amber-400" />,
      title: 'DevOps & GitOps',
      desc: 'Infrastructure-as-Code: version-control every runtime environment file directly in Git.',
      tag: 'IaC & Parity',
    },
    {
      category: 'dev',
      icon: <FlaskConical className="w-5 h-5 text-rose-400" />,
      title: 'Automated Testing',
      desc: 'Spin up disposable test databases and mocked external APIs for integration tests, then instantly wipe them.',
      tag: 'Test Parity',
    },
    {
      category: 'data',
      icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
      title: 'AI / ML Environments',
      desc: 'Package CUDA drivers, PyTorch, TensorFlow, and Python dependencies without host OS conflicts.',
      tag: 'GPU & Machine Learning',
    },
    {
      category: 'data',
      icon: <Database className="w-5 h-5 text-teal-400" />,
      title: 'Database Management',
      desc: 'Run multiple versions of PostgreSQL, MySQL, and MongoDB on the same machine without port conflicts.',
      tag: 'Multi-Version DBs',
    },
    {
      category: 'ops',
      icon: <TrendingUp className="w-5 h-5 text-pink-400" />,
      title: 'Scalable Applications',
      desc: 'Rapidly scale containers up or down horizontally in milliseconds during high-traffic spikes.',
      tag: 'Elastic Scaling',
    },
  ];

  const filteredCards = cards.filter(
    (c) => filter === 'all' || c.category === filter
  );

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 12 • Industry Ecosystem
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Where is Docker Used?</h2>
            <p className="text-sm md:text-base text-slate-400 mt-0.5">
              The de facto standard across modern software engineering, cloud architecture, and data science.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg transition ${
                filter === 'all'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-500/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All (9)
            </button>
            <button
              onClick={() => setFilter('dev')}
              className={`px-3 py-1 rounded-lg transition ${
                filter === 'dev'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-500/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setFilter('ops')}
              className={`px-3 py-1 rounded-lg transition ${
                filter === 'ops'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-500/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cloud & DevOps
            </button>
            <button
              onClick={() => setFilter('data')}
              className={`px-3 py-1 rounded-lg transition ${
                filter === 'data'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-500/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Data & AI
            </button>
          </div>
        </div>
      </div>

      {/* 9 Visual Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-3">
        {filteredCards.map((card, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:shadow-lg flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-slate-800 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  {card.tag}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                {card.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-cyan-400/80 flex items-center justify-between">
              <span>Standard Enterprise Pattern</span>
              <span className="opacity-0 group-hover:opacity-100 transition">Active</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Takeaway */}
      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Over 90% of Fortune 500 tech companies utilize containerization for critical workloads.</span>
        </div>
        <span className="text-slate-500 hidden sm:inline">Industry Standard</span>
      </div>
    </div>
  );
};
