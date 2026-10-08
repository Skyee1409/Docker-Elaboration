import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space', desc: 'Navigate to next slide' },
    { key: '←', desc: 'Navigate to previous slide' },
    { key: 'Home', desc: 'Jump to first slide (Title)' },
    { key: 'End', desc: 'Jump to last slide (Quiz)' },
    { key: 'Esc', desc: 'Toggle Slide Overview Grid' },
    { key: 'P', desc: 'Toggle Projector / Presentation Mode (hides chrome)' },
    { key: 'F', desc: 'Toggle Fullscreen display' },
    { key: '?', desc: 'Toggle this keyboard shortcuts dialog' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg border border-amber-500/30">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Presentation Controls</h3>
              <p className="text-xs text-slate-400">Keyboard shortcuts for smooth lecturing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
            aria-label="Close shortcuts"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts list */}
        <div className="p-6 space-y-3">
          {shortcuts.map((sc, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 text-sm"
            >
              <span className="text-slate-300 text-xs sm:text-sm">{sc.desc}</span>
              <kbd className="px-2.5 py-1 bg-slate-900 border border-slate-700 text-cyan-400 rounded font-mono text-xs font-semibold shadow-inner">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
