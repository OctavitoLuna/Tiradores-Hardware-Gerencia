import React, { useRef } from 'react';
import { cn } from '../../lib/utils';
import { gsap } from '../../lib/gsap';
import { useGSAP } from '@gsap/react';

// 1. ChipPulse SVG
export const ChipPulse: React.FC<{ className?: string; size?: number }> = ({ className, size = 120 }) => {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    gsap.to('.chip-core', {
      scale: 1.06,
      transformOrigin: '50% 50%',
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
    gsap.to('.chip-trace', {
      strokeDashoffset: 50,
      duration: 2,
      repeat: -1,
      ease: 'none'
    });
  }, { scope: ref });

  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 100 100" fill="none" className={cn("overflow-visible select-none", className)}>
      <rect x="25" y="25" width="50" height="50" rx="10" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="3" />
      <rect className="chip-core" x="35" y="35" width="30" height="30" rx="6" fill="#C1522A" stroke="#0A0A0A" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="4" fill="#FFE500" stroke="#0A0A0A" strokeWidth="1.5" />
      {/* Pins top/bottom/left/right */}
      {[35, 50, 65].map((pos, i) => (
        <React.Fragment key={i}>
          <path className="chip-trace" d={`M ${pos} 10 L ${pos} 25`} stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
          <path className="chip-trace" d={`M ${pos} 75 L ${pos} 90`} stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
          <path className="chip-trace" d={`M 10 ${pos} L 25 ${pos}`} stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
          <path className="chip-trace" d={`M 75 ${pos} L 90 ${pos}`} stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
        </React.Fragment>
      ))}
    </svg>
  );
};

// 2. HybridCloud SVG
export const HybridCloud: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 240 140" fill="none" className={cn("w-full h-auto select-none", className)}>
      {/* Local Server Block */}
      <rect x="20" y="30" width="70" height="80" rx="12" fill="#FFE500" stroke="#0A0A0A" strokeWidth="3.5" />
      <rect x="30" y="44" width="50" height="12" rx="3" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
      <rect x="30" y="64" width="50" height="12" rx="3" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
      <rect x="30" y="84" width="50" height="12" rx="3" fill="#C1522A" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="36" cy="50" r="2" fill="#B6F23A" />
      <circle cx="36" cy="70" r="2" fill="#B6F23A" />
      <circle cx="36" cy="90" r="2" fill="#FFE500" />
      <text x="55" y="125" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle">ON-PREMISE</text>

      {/* Cloud Block */}
      <g transform="translate(140, 25)">
        <path
          d="M 20 60 A 18 18 0 0 1 30 28 A 28 28 0 0 1 70 24 A 22 22 0 0 1 85 50 A 15 15 0 0 1 75 68 L 25 68 A 12 12 0 0 1 20 60 Z"
          fill="#00C2CB"
          stroke="#0A0A0A"
          strokeWidth="3.5"
        />
        <text x="52" y="50" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle">CLOUD IA</text>
        <text x="52" y="100" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle">ELÁSTICA</text>
      </g>

      {/* Bi-directional Data Synch Arrows */}
      <path d="M 96 60 L 134 60" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
      <polygon points="138,60 130,54 130,66" fill="#C1522A" stroke="#0A0A0A" strokeWidth="2" />
      
      <path d="M 134 80 L 96 80" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
      <polygon points="92,80 100,74 100,86" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="2" />
    </svg>
  );
};

// 3. IoTMedical SVG
export const IoTMedical: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 180 140" fill="none" className={cn("w-full h-auto select-none", className)}>
      <rect x="25" y="20" width="130" height="95" rx="14" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="3.5" />
      <rect x="35" y="32" width="110" height="50" rx="6" fill="#0A0A0A" />
      {/* ECG */}
      <path d="M 40 57 L 60 57 L 66 40 L 74 74 L 82 48 L 90 62 L 96 57 L 140 57" stroke="#B6F23A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="98" r="5" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="70" cy="98" r="5" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="90" cy="98" r="5" fill="#C1522A" stroke="#0A0A0A" strokeWidth="2" />
      {/* Wifi Waves on top */}
      <path d="M 140 16 A 14 14 0 0 0 160 16" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 144 22 A 8 8 0 0 0 156 22" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
};

// 4. ShieldSecurity SVG
export const ShieldSecurity: React.FC<{ className?: string; size?: number }> = ({ className, size = 120 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={cn("select-none", className)}>
      <path
        d="M 50 12 L 82 24 C 82 62, 50 88, 50 88 C 50 88, 18 62, 18 24 Z"
        fill="#FF3DCB"
        stroke="#0A0A0A"
        strokeWidth="3.5"
      />
      {/* Padlock */}
      <rect x="38" y="44" width="24" height="20" rx="4" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2.5" />
      <path d="M 43 44 L 43 36 C 43 32, 57 32, 57 36 L 57 44" stroke="#0A0A0A" strokeWidth="3" fill="none" />
      <circle cx="50" cy="52" r="2.5" fill="#0A0A0A" />
      <line x1="50" y1="54" x2="50" y2="59" stroke="#0A0A0A" strokeWidth="2" />
    </svg>
  );
};

// 5. TriangleProgress (Ciencia, Tecnología, Innovación)
export const TriangleProgress: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 320 260" fill="none" className={cn("w-full h-auto select-none", className)}>
      {/* Outer Triangle with thick stroke */}
      <polygon points="160,25 35,215 285,215" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="4.5" />
      <polygon points="160,65 75,195 245,195" fill="#FFE500" stroke="#0A0A0A" strokeWidth="3" />
      
      {/* Center Label */}
      <text x="160" y="155" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="16" textAnchor="middle">
        PROGRESO
      </text>

      {/* Vertex 1: CIENCIA (Top) */}
      <g transform="translate(160, 25)">
        <circle r="26" fill="#C1522A" stroke="#0A0A0A" strokeWidth="3.5" />
        <text y="5" fill="#FFFFFF" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle">CIENCIA</text>
      </g>

      {/* Vertex 2: TECNOLOGÍA (Bottom Left) */}
      <g transform="translate(35, 215)">
        <circle r="26" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="3.5" />
        <text y="5" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle">TECNOLOGÍA</text>
      </g>

      {/* Vertex 3: INNOVACIÓN (Bottom Right) */}
      <g transform="translate(285, 215)">
        <circle r="26" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="3.5" />
        <text y="5" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle">INNOVACIÓN</text>
      </g>
    </svg>
  );
};

// 6. GoldenCircle (Simon Sinek)
export const GoldenCircle: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 320 320" fill="none" className={cn("w-full h-auto max-w-[320px] select-none", className)}>
      {/* Outer: WHAT */}
      <circle cx="160" cy="160" r="145" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="4" />
      <text x="160" y="45" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="16" textAnchor="middle">WHAT (QUÉ // HARDWARE)</text>

      {/* Middle: HOW */}
      <circle cx="160" cy="160" r="100" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="3.5" />
      <text x="160" y="90" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="15" textAnchor="middle">HOW (CÓMO // ÁGIL)</text>

      {/* Center: WHY */}
      <circle cx="160" cy="160" r="55" fill="#C1522A" stroke="#0A0A0A" strokeWidth="3.5" />
      <text x="160" y="166" fill="#FFFFFF" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="16" textAnchor="middle">WHY (POR QUÉ)</text>
    </svg>
  );
};

// 7. SprintCycle (Scrum)
export const SprintCycle: React.FC<{ className?: string }> = ({ className }) => {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    gsap.to('.sprint-arrow', {
      rotation: 360,
      transformOrigin: '50% 50%',
      duration: 20,
      repeat: -1,
      ease: 'none'
    });
  }, { scope: ref });

  return (
    <svg ref={ref} viewBox="0 0 280 280" fill="none" className={cn("w-full h-auto max-w-[280px] select-none", className)}>
      {/* Background circle */}
      <circle cx="140" cy="140" r="110" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="4" strokeDasharray="8 6" />

      {/* Rotating Arrow Arc */}
      <g className="sprint-arrow">
        <path d="M 140 30 A 110 110 0 1 1 50 90" stroke="#C1522A" strokeWidth="8" strokeLinecap="round" fill="none" />
        <polygon points="52,94 40,80 62,80" fill="#C1522A" stroke="#0A0A0A" strokeWidth="2" />
      </g>

      {/* Center Pill */}
      <circle cx="140" cy="140" r="54" fill="#FFE500" stroke="#0A0A0A" strokeWidth="3.5" />
      <text x="140" y="136" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="16" textAnchor="middle">SPRINT</text>
      <text x="140" y="154" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle">1-2 SEMANAS</text>

      {/* 4 Ceremonies Markers */}
      <g transform="translate(140, 28)">
        <rect x="-35" y="-14" width="70" height="24" rx="12" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="2" />
        <text y="2" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">PLANNING</text>
      </g>
      <g transform="translate(250, 140)">
        <rect x="-30" y="-14" width="60" height="24" rx="12" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="2" />
        <text y="2" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">DAILY</text>
      </g>
      <g transform="translate(140, 252)">
        <rect x="-32" y="-14" width="64" height="24" rx="12" fill="#FF3DCB" stroke="#0A0A0A" strokeWidth="2" />
        <text y="2" fill="#FFFFFF" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">REVIEW</text>
      </g>
      <g transform="translate(30, 140)">
        <rect x="-32" y="-14" width="64" height="24" rx="12" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
        <text y="2" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">RETRO</text>
      </g>
    </svg>
  );
};

// 8. Zigzag Section Divider
export const SectionDivider: React.FC<{ color?: string; invert?: boolean }> = ({ color = '#0A0A0A', invert = false }) => {
  return (
    <div className={cn("w-full overflow-hidden leading-none select-none", invert && "rotate-180")}>
      <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="w-full h-6 block">
        <path
          d="M 0 0 L 25 24 L 50 0 L 75 24 L 100 0 L 125 24 L 150 0 L 175 24 L 200 0 L 225 24 L 250 0 L 275 24 L 300 0 L 325 24 L 350 0 L 375 24 L 400 0 L 425 24 L 450 0 L 475 24 L 500 0 L 525 24 L 550 0 L 575 24 L 600 0 L 625 24 L 650 0 L 675 24 L 700 0 L 725 24 L 750 0 L 775 24 L 800 0 L 825 24 L 850 0 L 875 24 L 900 0 L 925 24 L 950 0 L 975 24 L 1000 0 L 1025 24 L 1050 0 L 1075 24 L 1100 0 L 1125 24 L 1150 0 L 1175 24 L 1200 0"
          stroke={color}
          strokeWidth="3.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

// 9. BpmnFlowGraphic
export const BpmnFlowGraphic: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 340 180" fill="none" className={cn("w-full h-auto max-w-[340px] select-none", className)}>
      {/* Start Event: Green circle */}
      <circle cx="36" cy="90" r="18" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="3.5" />
      <polygon points="32,82 46,90 32,98" fill="#0A0A0A" />

      {/* Sequence Line 1 */}
      <line x1="54" y1="90" x2="88" y2="90" stroke="#0A0A0A" strokeWidth="3.5" />
      <polygon points="90,90 82,85 82,95" fill="#0A0A0A" />

      {/* Activity Box: White with border */}
      <rect x="92" y="65" width="84" height="50" rx="8" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="3.5" />
      <text x="134" y="88" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle">TAREA CLÍNICA</text>
      <text x="134" y="103" fill="#0A0A0A" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="middle">INFRAESTRUCTURA</text>

      {/* Sequence Line 2 */}
      <line x1="176" y1="90" x2="206" y2="90" stroke="#0A0A0A" strokeWidth="3.5" />
      <polygon points="208,90 200,85 200,95" fill="#0A0A0A" />

      {/* Exclusive Gateway: Yellow Diamond */}
      <g transform="translate(230, 90) rotate(45)">
        <rect x="-18" y="-18" width="36" height="36" rx="4" fill="#FFE500" stroke="#0A0A0A" strokeWidth="3.5" />
        <line x1="-8" y1="-8" x2="8" y2="8" stroke="#0A0A0A" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="8" y1="-8" x2="-8" y2="8" stroke="#0A0A0A" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* Branch 1: Top (Approved) */}
      <path d="M 230 65 L 230 40 L 275 40" stroke="#0A0A0A" strokeWidth="3" fill="none" />
      <polygon points="278,40 270,36 270,44" fill="#0A0A0A" />
      <circle cx="295" cy="40" r="14" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="3.5" />
      <circle cx="295" cy="40" r="9" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="2.5" />

      {/* Branch 2: Bottom (Feedback Loop) */}
      <path d="M 230 115 L 230 145 L 134 145 L 134 120" stroke="#C1522A" strokeWidth="3" strokeDasharray="5 3" fill="none" />
      <polygon points="134,116 130,124 138,124" fill="#C1522A" />

      {/* Branch Label */}
      <text x="250" y="32" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="10">SÍ</text>
      <text x="212" y="140" fill="#C1522A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="10">REPROCESO (NO)</text>
    </svg>
  );
};

