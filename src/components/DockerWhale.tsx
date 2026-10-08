import React from 'react';

interface DockerWhaleProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  animated?: boolean;
}

export const DockerWhale: React.FC<DockerWhaleProps> = ({ size = 'md', animated = true }) => {
  const dimensions = {
    sm: { w: 120, h: 80 },
    md: { w: 220, h: 140 },
    lg: { w: 340, h: 220 },
    hero: { w: 460, h: 290 },
  }[size];

  return (
    <div className={`relative inline-block ${animated ? 'animate-float-slow' : ''}`}>
      <svg
        width={dimensions.w}
        height={dimensions.h}
        viewBox="0 0 460 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_12px_24px_rgba(13,183,237,0.25)]"
      >
        <defs>
          <linearGradient id="whaleBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          <linearGradient id="boxBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="boxBlue2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>

          <linearGradient id="boxCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          <linearGradient id="spoutGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Water Spout */}
        <g className="animate-pulse-glow">
          <path
            d="M360 85 C360 40, 390 25, 410 30 C395 38, 385 55, 385 85 Z"
            fill="url(#spoutGrad)"
          />
          <circle cx="415" cy="28" r="4" fill="#38bdf8" className="animate-ping opacity-75" />
          <circle cx="390" cy="18" r="3" fill="#7dd3fc" />
          <circle cx="425" cy="40" r="2.5" fill="#bae6fd" />
        </g>

        {/* Container Row 1 (Top single) */}
        <g id="containers">
          <rect x="230" y="55" width="38" height="30" rx="3" fill="url(#boxBlue2)" stroke="#bae6fd" strokeWidth="1.5" />
          <line x1="242" y1="55" x2="242" y2="85" stroke="#bae6fd" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="256" y1="55" x2="256" y2="85" stroke="#bae6fd" strokeWidth="1" strokeDasharray="2 2" />

          {/* Container Row 2 (Middle) */}
          <rect x="184" y="93" width="38" height="30" rx="3" fill="url(#boxBlue1)" stroke="#7dd3fc" strokeWidth="1.5" />
          <line x1="196" y1="93" x2="196" y2="123" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="210" y1="93" x2="210" y2="123" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="2 2" />

          <rect x="230" y="93" width="38" height="30" rx="3" fill="url(#boxCyan)" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="242" y1="93" x2="242" y2="123" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="256" y1="93" x2="256" y2="123" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />

          <rect x="276" y="93" width="38" height="30" rx="3" fill="url(#boxBlue2)" stroke="#bae6fd" strokeWidth="1.5" />
          <line x1="288" y1="93" x2="288" y2="123" stroke="#bae6fd" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="302" y1="93" x2="302" y2="123" stroke="#bae6fd" strokeWidth="1" strokeDasharray="2 2" />

          {/* Container Row 3 (Base stack) */}
          <rect x="138" y="131" width="38" height="30" rx="3" fill="url(#boxBlue2)" stroke="#7dd3fc" strokeWidth="1.5" />
          <line x1="150" y1="131" x2="150" y2="161" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="164" y1="131" x2="164" y2="161" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="2 2" />

          <rect x="184" y="131" width="38" height="30" rx="3" fill="url(#boxCyan)" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="196" y1="131" x2="196" y2="161" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="210" y1="131" x2="210" y2="161" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />

          <rect x="230" y="131" width="38" height="30" rx="3" fill="url(#boxBlue1)" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="242" y1="131" x2="242" y2="161" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="256" y1="131" x2="256" y2="161" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />

          <rect x="276" y="131" width="38" height="30" rx="3" fill="url(#boxBlue2)" stroke="#bae6fd" strokeWidth="1.5" />
          <line x1="288" y1="131" x2="288" y2="161" stroke="#bae6fd" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="302" y1="131" x2="302" y2="161" stroke="#bae6fd" strokeWidth="1" strokeDasharray="2 2" />

          <rect x="322" y="131" width="38" height="30" rx="3" fill="url(#boxCyan)" stroke="#7dd3fc" strokeWidth="1.5" />
          <line x1="334" y1="131" x2="334" y2="161" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="348" y1="131" x2="348" y2="161" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* Whale Body */}
        <path
          d="M370 170
             C360 162 330 162 310 165
             C240 165 140 165 100 165
             C65 165 40 185 30 205
             C20 225 35 250 70 255
             C120 262 260 265 340 255
             C385 250 415 225 425 195
             C435 165 420 155 405 160
             C390 165 380 175 370 170 Z"
          fill="url(#whaleBodyGrad)"
          stroke="#38bdf8"
          strokeWidth="3"
        />

        {/* Whale Tail Fluke */}
        <path
          d="M40 195
             C25 180 5 170 0 175
             C0 195 15 215 35 220
             C10 230 0 250 5 260
             C25 255 40 230 50 215 Z"
          fill="url(#whaleBodyGrad)"
          stroke="#38bdf8"
          strokeWidth="2.5"
        />

        {/* Whale Eye */}
        <circle cx="395" cy="190" r="4.5" fill="#ffffff" />
        <circle cx="396" cy="189" r="2.2" fill="#0369a1" />

        {/* Subtle Belly Ridge lines */}
        <path
          d="M120 235 C180 245 280 245 340 235"
          stroke="#0284c7"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M140 245 C200 252 270 252 320 245"
          stroke="#0284c7"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Ocean Waves Beneath */}
        <path
          d="M0 270 C80 255 140 285 220 270 C300 255 380 285 460 270"
          stroke="#0284c7"
          strokeWidth="2.5"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M20 282 C100 270 180 295 260 282 C340 270 420 295 480 282"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          fill="none"
          opacity="0.5"
          className="animate-flow-dash"
        />
      </svg>
    </div>
  );
};
