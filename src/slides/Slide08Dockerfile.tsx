import React, { useState } from 'react';
import { DOCKERFILE_INSTRUCTIONS } from '../data/slidesData';
import {
  FileCode,
  Layers,
  ArrowRight,
  Info,
  Sparkles,
  Zap,
  Box,
  Copy,
  Check,
} from 'lucide-react';

export const Slide08Dockerfile: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const dockerfileLines = [
    { num: 1, line: 'FROM node:22-alpine', instruction: 'FROM', index: 0 },
    { num: 2, line: '', instruction: null, index: -1 },
    { num: 3, line: 'WORKDIR /app', instruction: 'WORKDIR', index: 1 },
    { num: 4, line: '', instruction: null, index: -1 },
    { num: 5, line: 'COPY package*.json ./', instruction: 'COPY (Manifest)', index: 2 },
    { num: 6, line: '', instruction: null, index: -1 },
    { num: 7, line: 'RUN npm install --omit=dev', instruction: 'RUN', index: 3 },
    { num: 8, line: '', instruction: null, index: -1 },
    { num: 9, line: 'COPY . .', instruction: 'COPY (Code)', index: 4 },
    { num: 10, line: '', instruction: null, index: -1 },
    { num: 11, line: 'EXPOSE 3000', instruction: 'EXPOSE', index: 5 },
    { num: 12, line: '', instruction: null, index: -1 },
    { num: 13, line: 'CMD ["npm", "start"]', instruction: 'CMD', index: 6 },
  ];

  const fullDockerfileText = `# Production Node.js Dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
`;

  const copyDockerfile = () => {
    navigator.clipboard.writeText(fullDockerfileText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentInstruction = DOCKERFILE_INSTRUCTIONS[selectedIndex];

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 08 • The Container Recipe
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">How Docker Builds an Application</h2>
        <p className="text-sm md:text-base text-slate-400 mt-1">
          A <span className="text-cyan-400 font-semibold font-mono">Dockerfile</span> is a declarative script containing step-by-step instructions to assemble a container image.
        </p>
      </div>

      {/* Main Grid: Code Editor on Left, Interactive Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-2 items-stretch">
        {/* Code Editor Window */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
          {/* Editor Title Bar */}
          <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-slate-300 font-semibold ml-2 flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-cyan-400" /> Dockerfile
              </span>
            </div>
            <button
              onClick={copyDockerfile}
              className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition"
              title="Copy complete Dockerfile"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Interactive Code Lines */}
          <div className="p-4 font-mono text-xs sm:text-sm overflow-x-auto space-y-1 flex-1 flex flex-col justify-center">
            {dockerfileLines.map((row) => {
              if (row.index === -1) {
                return (
                  <div key={row.num} className="h-2 text-slate-700 select-none">
                    <span className="inline-block w-6 text-right pr-3 opacity-40 text-xs">
                      {row.num}
                    </span>
                  </div>
                );
              }

              const isSelected = selectedIndex === row.index;
              return (
                <button
                  key={row.num}
                  onClick={() => setSelectedIndex(row.index)}
                  className={`w-full text-left py-1 px-2 rounded-lg transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-sky-950/80 border border-cyan-400/80 text-white shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                      : 'hover:bg-slate-800/60 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="inline-block w-6 text-right pr-3 text-slate-600 select-none text-xs">
                      {row.num}
                    </span>
                    <span
                      className={`font-semibold ${
                        row.line.startsWith('FROM')
                          ? 'text-cyan-400'
                          : row.line.startsWith('WORKDIR')
                          ? 'text-purple-400'
                          : row.line.startsWith('COPY')
                          ? 'text-amber-300'
                          : row.line.startsWith('RUN')
                          ? 'text-emerald-400'
                          : row.line.startsWith('EXPOSE')
                          ? 'text-sky-300'
                          : 'text-rose-400'
                      }`}
                    >
                      {row.line}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded transition ${
                      isSelected
                        ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400'
                        : 'opacity-0 group-hover:opacity-100 text-slate-400 bg-slate-800'
                    }`}
                  >
                    Click to Inspect
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Instruction Deep Dive Inspector */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  INSTRUCTION EXPLAINER
                </span>
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sky-950 border border-sky-800 text-cyan-300 font-semibold">
                {currentInstruction.keyword.split(' ')[0]}
              </span>
            </div>

            <div className="mt-4 space-y-3.5">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300">
                {currentInstruction.example}
              </div>

              <div>
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase">Purpose:</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                  {currentInstruction.purpose}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40">
                <span className="text-xs font-mono font-semibold text-amber-300 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Best Practice & Tip:
                </span>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {currentInstruction.bestPractice}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-sky-950/20 border border-sky-900/40">
                <span className="text-xs font-mono font-semibold text-cyan-300 uppercase flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Layer Caching Impact:
                </span>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {currentInstruction.cachingImpact}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 text-center">
            <span className="text-[11px] text-slate-500 font-mono">
              💡 Notice how COPY package*.json is placed before COPY . . to leverage cached npm install!
            </span>
          </div>
        </div>
      </div>

      {/* Build to App Bottom Pipeline */}
      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-1.5 text-slate-300">
          <FileCode className="w-4 h-4 text-amber-400" />
          <span>Dockerfile</span>
        </div>
        <ArrowRight className="w-4 h-4 text-cyan-500" />
        <div className="flex items-center gap-1.5 text-cyan-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
          <span>docker build</span>
        </div>
        <ArrowRight className="w-4 h-4 text-cyan-500" />
        <div className="flex items-center gap-1.5 text-indigo-300">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>Image</span>
        </div>
        <ArrowRight className="w-4 h-4 text-cyan-500" />
        <div className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
          <span>docker run</span>
        </div>
        <ArrowRight className="w-4 h-4 text-cyan-500" />
        <div className="flex items-center gap-1.5 text-teal-300 font-bold">
          <Box className="w-4 h-4 text-teal-400" />
          <span>Live Running Application</span>
        </div>
      </div>
    </div>
  );
};
