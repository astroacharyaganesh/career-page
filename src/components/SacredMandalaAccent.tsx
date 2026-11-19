import React from 'react';

interface SacredMandalaAccentProps {
  className?: string;
}

const TWELVE_SPOKE_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export const SacredMandalaAccent: React.FC<SacredMandalaAccentProps> = ({
  className = 'w-64 h-64'
}) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 240"
      fill="none"
      className={className}
    >
      {/* Outer Nakshatra 12-Rashi Rotating Wheel */}
      <g className="celestial-wheel-spin">
        <circle
          cx="120"
          cy="120"
          r="108"
          stroke="currentColor"
          strokeOpacity="0.48"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        <circle
          cx="120"
          cy="120"
          r="94"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="0.9"
        />
        {TWELVE_SPOKE_ANGLES.map((deg) => (
          <line
            key={deg}
            x1="120"
            y1="14"
            x2="120"
            y2="28"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="1.2"
            transform={`rotate(${deg} 120 120)`}
          />
        ))}
      </g>

      {/* Counter-Rotating Yantra Lotus Petal Star */}
      <g className="celestial-wheel-reverse">
        <circle
          cx="120"
          cy="120"
          r="76"
          stroke="currentColor"
          strokeOpacity="0.34"
          strokeWidth="0.9"
          strokeDasharray="2 5"
        />
        <rect
          x="66"
          y="66"
          width="108"
          height="108"
          stroke="currentColor"
          strokeOpacity="0.24"
          strokeWidth="0.9"
        />
        <rect
          x="66"
          y="66"
          width="108"
          height="108"
          stroke="currentColor"
          strokeOpacity="0.24"
          strokeWidth="0.9"
          transform="rotate(45 120 120)"
        />
      </g>

      {/* Inner Sacred Bindu */}
      <circle
        cx="120"
        cy="120"
        r="34"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <circle cx="120" cy="120" r="4" fill="currentColor" fillOpacity="0.45" />
    </svg>
  );
};

export const SacredDividerOrnament: React.FC<{ className?: string }> = ({
  className = 'w-6 h-6 text-[#9e6b16]'
}) => (
  <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className={className}>
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />
    <path
      d="M16 4 L18.8 13.2 L28 16 L18.8 18.8 L16 28 L13.2 18.8 L4 16 L13.2 13.2 Z"
      stroke="currentColor"
      strokeWidth="1.15"
      fill="currentColor"
      fillOpacity="0.16"
    />
    <circle cx="16" cy="16" r="2.2" fill="currentColor" />
  </svg>
);
