import React, { useState } from 'react';
import { TERMINAL_COMMANDS } from '../data/slidesData';
import type { CommandItem } from '../types/presentation';
import {
  Terminal as TerminalIcon,
  Play,
  Copy,
  Check,
  Trash2,
  Info,
} from 'lucide-react';

export const Slide10Commands: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<CommandItem>(TERMINAL_COMMANDS[3]); // default docker run
  const [history, setHistory] = useState<
    { command: string; output: string[]; timestamp: string }[]
  >([
    {
      command: 'docker run -d -p 8080:80 --name web-server nginx',
      output: TERMINAL_COMMANDS[3].exampleOutput,
      timestamp: '14:20:02',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const executeCommand = (item: CommandItem) => {
    setActiveCommand(item);
    const now = new Date().toTimeString().split(' ')[0];
    setHistory((prev) => [
      ...prev,
      {
        command: item.command,
        output: item.exampleOutput,
        timestamp: now,
      },
    ]);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    // Try finding matching command
    const matched = TERMINAL_COMMANDS.find(
      (c) => c.command.toLowerCase().includes(trimmed.toLowerCase()) || trimmed.toLowerCase().includes(c.command.split(' ')[1] || '')
    );

    const now = new Date().toTimeString().split(' ')[0];
    if (matched) {
      setActiveCommand(matched);
      setHistory((prev) => [
        ...prev,
        { command: trimmed, output: matched.exampleOutput, timestamp: now },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: trimmed,
          output: [
            `docker: '${trimmed}' executed in interactive sandbox.`,
            `Simulated success for teaching demonstration!`,
            `Tip: Click any preset button below for standard outputs.`,
          ],
          timestamp: now,
        },
      ]);
    }
    setInputVal('');
  };

  const copyCurrentCommand = () => {
    navigator.clipboard.writeText(activeCommand.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-950">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">
            Slide 10 • Hands-On CLI
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Essential Docker Commands</h2>
        <p className="text-sm md:text-base text-slate-400 mt-1">
          Interactive developer terminal. Click any command chip or type directly into the prompt.
        </p>
      </div>

      {/* Main Grid: Terminal Console (Left) + Command Explanation (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-2 items-stretch flex-1">
        {/* Terminal Window */}
        <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
          {/* macOS Style Header Bar */}
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                dev@docker-workstation: ~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="text-[11px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 transition flex items-center gap-1"
                title="Clear screen"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-3 bg-[#070d19] min-h-[220px]">
            <div className="text-slate-500 text-[11px]">
              Docker CLI sandbox initialized. Type <span className="text-cyan-400">help</span> or click command buttons below.
            </div>

            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-semibold">{entry.command}</span>
                  <span className="text-[10px] text-slate-600 ml-auto">{entry.timestamp}</span>
                </div>
                <div className="text-slate-300 pl-4 border-l border-slate-800/80 space-y-0.5 text-[11px] whitespace-pre-wrap">
                  {entry.output.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className={
                        line.includes('Error') || line.includes('FAILED')
                          ? 'text-rose-400'
                          : line.includes('Successfully') || line.includes('Status: Downloaded') || line.includes('Started') || line.includes('Up 2')
                          ? 'text-emerald-400'
                          : line.includes('REPOSITORY') || line.includes('CONTAINER ID')
                          ? 'text-cyan-300 font-semibold'
                          : 'text-slate-300'
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Interactive Prompt Input */}
            <form onSubmit={handleInputSubmit} className="flex items-center gap-2 pt-1 text-xs">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command here (e.g., docker ps, clear)..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none font-mono text-xs placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-cyan-300 text-[10px] hover:bg-sky-900 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Command Info Inspector (Right) */}
        <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-cyan-400" /> COMMAND INSPECTOR
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-cyan-300 border border-sky-800 uppercase">
                {activeCommand.category}
              </span>
            </div>

            <div className="mt-3 space-y-3">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Command:</span>
                <div className="mt-1 p-2 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between">
                  <span className="truncate">{activeCommand.command}</span>
                  <button
                    onClick={copyCurrentCommand}
                    className="p-1 text-slate-400 hover:text-white transition"
                    title="Copy command"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Purpose:</span>
                <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                  {activeCommand.purpose}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">General Syntax:</span>
                <div className="mt-0.5 p-1.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-amber-300">
                  {activeCommand.syntax}
                </div>
              </div>

              {activeCommand.flags && activeCommand.flags.length > 0 && (
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Important Flags:</span>
                  <div className="mt-1 space-y-1">
                    {activeCommand.flags.map((f, i) => (
                      <div key={i} className="text-[11px] bg-slate-800/60 p-1.5 rounded border border-slate-700/60">
                        <span className="font-mono text-cyan-300 font-bold">{f.flag}</span>
                        <span className="text-slate-300 block text-[10px] mt-0.5">{f.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => executeCommand(activeCommand)}
            className="w-full mt-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs font-mono flex items-center justify-center gap-1.5 transition shadow-sm"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Run in Terminal</span>
          </button>
        </div>
      </div>

      {/* Preset Command Chips Grid */}
      <div>
        <div className="text-xs font-mono text-slate-400 mb-1.5">CLICK ANY ESSENTIAL COMMAND TO TEST:</div>
        <div className="flex flex-wrap gap-1.5">
          {TERMINAL_COMMANDS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => executeCommand(item)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition border ${
                activeCommand.command === item.command
                  ? 'bg-sky-950 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              $ {item.command.split(' ')[1] || item.command}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
