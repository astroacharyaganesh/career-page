import React from 'react';

interface AcharyaGaneshLogoProps {
  className?: string;
}

export const AcharyaGaneshLogo: React.FC<AcharyaGaneshLogoProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="agAuraGrad" cx="50%" cy="45%" r="52%">
            <stop offset="0%" stopColor="#FFFDF7" stopOpacity="1" />
            <stop offset="45%" stopColor="#FEEBC8" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#FBD38D" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ED8936" stopOpacity="0.85" />
          </radialGradient>
          <radialGradient id="agHaloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFF0" />
            <stop offset="70%" stopColor="#FEEBC8" />
            <stop offset="100%" stopColor="#DD6B20" />
          </radialGradient>
          <linearGradient id="agRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#652B19" />
            <stop offset="20%" stopColor="#9C4221" />
            <stop offset="50%" stopColor="#DD6B20" />
            <stop offset="80%" stopColor="#9C4221" />
            <stop offset="100%" stopColor="#652B19" />
          </linearGradient>
          <linearGradient id="agOuterRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECC94B" />
            <stop offset="40%" stopColor="#DD6B20" />
            <stop offset="80%" stopColor="#7B341E" />
            <stop offset="100%" stopColor="#ECC94B" />
          </linearGradient>
          <linearGradient id="agRobeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ED8936" />
            <stop offset="100%" stopColor="#C05621" />
          </linearGradient>
          <filter id="agDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Circular Zodiac Rim (Completely Transparent Background Outside) */}
        <circle cx="100" cy="94" r="82" fill="url(#agOuterRing)" filter="url(#agDropShadow)" />
        <circle cx="100" cy="94" r="77" fill="#3D1A10" />
        <circle cx="100" cy="94" r="73" fill="url(#agAuraGrad)" stroke="#9C4221" strokeWidth="1.5" />

        {/* Zodiac Astrolabe Houses & Nodes */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 100 + 63 * Math.cos(angle);
          const y = 94 + 63 * Math.sin(angle);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="#FFFDF7" stroke="#9C4221" strokeWidth="1" />
              <circle cx={x} cy={y} r="2.5" fill="#DD6B20" />
            </g>
          );
        })}

        {/* Decorative Rays */}
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x1 = 100 + 44 * Math.cos(angle);
          const y1 = 94 + 44 * Math.sin(angle);
          const x2 = 100 + 54 * Math.cos(angle);
          const y2 = 94 + 54 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#C05621"
              strokeWidth="0.8"
              opacity="0.45"
            />
          );
        })}

        {/* Halo Glow behind Guru */}
        <circle cx="100" cy="74" r="30" fill="url(#agHaloGrad)" opacity="0.85" />
        <circle cx="100" cy="74" r="28" stroke="#DD6B20" strokeWidth="1" strokeDasharray="3,2" fill="none" />

        {/* Meditating Guru (Acharya) Figure */}
        {/* Saffron Lower Body & Crossed Lotus Legs */}
        <ellipse cx="100" cy="122" rx="36" ry="16" fill="url(#agRobeGrad)" filter="url(#agDropShadow)" />
        <ellipse cx="100" cy="124" rx="30" ry="11" fill="#9C4221" />

        {/* Torso & Saffron Robe */}
        <path
          d="M74 122 C72 96, 82 82, 100 82 C118 82, 128 96, 126 122 Z"
          fill="url(#agRobeGrad)"
        />
        
        {/* Saffron Drape */}
        <path
          d="M84 86 Q100 114 116 86 Q100 125 84 86 Z"
          fill="#FEEBC8"
          opacity="0.95"
        />

        {/* Head & Neck */}
        <circle cx="100" cy="72" r="14" fill="#FBD38D" />
        
        {/* Sacred Beard & Long Hair */}
        <path
          d="M88 68 Q100 52 112 68 Q114 84 100 92 Q86 84 88 68 Z"
          fill="#2A1208"
        />
        <circle cx="100" cy="70" r="11" fill="#FEEBC8" />

        {/* Sacred Tilak on Forehead */}
        <line x1="100" y1="62" x2="100" y2="67" stroke="#E53E3E" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="100" cy="67.5" r="1.1" fill="#ECC94B" />

        {/* Serene Meditative Eyes & Brow */}
        <path d="M94 70 Q97 73 100 70" stroke="#7B341E" strokeWidth="0.9" fill="none" />
        <path d="M100 70 Q103 73 106 70" stroke="#7B341E" strokeWidth="0.9" fill="none" />

        {/* Sacred Rudraksha Beads Mala */}
        <path
          d="M90 85 Q100 102 110 85"
          stroke="#7B341E"
          strokeWidth="1.6"
          strokeDasharray="2,2"
          fill="none"
        />

        {/* Gyan Mudra Meditating Hands */}
        <circle cx="100" cy="104" r="6" fill="#FEEBC8" stroke="#9C4221" strokeWidth="0.75" />
        <circle cx="100" cy="104" r="3.5" fill="#DD6B20" />

        {/* Ribbon Banner at Bottom with 'Acharya Ganesh' */}
        <g filter="url(#agDropShadow)">
          {/* Ribbon Ends */}
          <path d="M26 142 L42 128 L42 152 Z" fill="#4A1D0E" />
          <path d="M174 142 L158 128 L158 152 Z" fill="#4A1D0E" />
          
          {/* Ribbon Body */}
          <path
            d="M34 136 Q100 148 166 136 L162 160 Q100 172 38 160 Z"
            fill="url(#agRibbonGrad)"
            stroke="#ECC94B"
            strokeWidth="1.2"
          />

          {/* Ribbon Text */}
          <text
            x="100"
            y="152"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="14"
            fontWeight="bold"
            fill="#FFFDF7"
            letterSpacing="0.4"
          >
            Acharya Ganesh
          </text>
        </g>
      </svg>
    </div>
  );
};
