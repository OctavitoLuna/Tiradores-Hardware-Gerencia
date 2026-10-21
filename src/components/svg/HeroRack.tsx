import React, { useRef } from 'react';
import { gsap } from '../../lib/gsap';
import { useGSAP } from '@gsap/react';

export interface HeroRackProps {
  className?: string;
}

export const HeroRack: React.FC<HeroRackProps> = ({ className }) => {
  const containerRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      // 1. Spinning fans
      gsap.to('.rack-fan', {
        rotation: 360,
        transformOrigin: '50% 50%',
        repeat: -1,
        ease: 'none',
        duration: 2,
      });

      // 2. Blinking LEDs in staggered random intervals
      gsap.to('.rack-led-green', {
        opacity: 0.2,
        duration: 0.3,
        stagger: {
          each: 0.25,
          repeat: -1,
          yoyo: true,
        },
        ease: 'power1.inOut',
      });

      gsap.to('.rack-led-amber', {
        opacity: 0.1,
        duration: 0.5,
        stagger: {
          each: 0.4,
          repeat: -1,
          yoyo: true,
        },
        ease: 'power1.inOut',
      });

      // 3. Heartbeat ECG pulse line
      gsap.fromTo(
        '.ecg-line',
        { strokeDashoffset: 600 },
        {
          strokeDashoffset: 0,
          duration: 2.2,
          repeat: -1,
          ease: 'none',
        }
      );

      // 4. Floating tech stickers
      gsap.to('.floating-sticker-1', {
        y: '-=10',
        rotation: 4,
        duration: 2.8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      gsap.to('.floating-sticker-2', {
        y: '+=12',
        rotation: -5,
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      gsap.to('.floating-sticker-3', {
        y: '-=8',
        rotation: 6,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="relative w-full max-w-[580px] mx-auto select-none">
      <svg
        ref={containerRef}
        viewBox="0 0 600 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "w-full h-auto drop-shadow-[8px_8px_0_#0A0A0A]"}
      >
        {/* Ground Platform */}
        <ellipse cx="300" cy="570" rx="240" ry="24" fill="#0A0A0A" opacity="0.15" />
        <rect x="100" y="540" width="400" height="24" rx="12" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="4" />
        <rect x="120" y="546" width="360" height="12" rx="6" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="3" />

        {/* Server Rack Main Cabinet Outer Frame */}
        <rect
          x="140"
          y="80"
          width="320"
          height="460"
          rx="20"
          fill="#FAF5DC"
          stroke="#0A0A0A"
          strokeWidth="4"
        />

        {/* Rack Side Rails */}
        <rect x="156" y="96" width="16" height="428" rx="4" fill="#FFE500" stroke="#0A0A0A" strokeWidth="3" />
        <rect x="428" y="96" width="16" height="428" rx="4" fill="#FFE500" stroke="#0A0A0A" strokeWidth="3" />

        {/* Screw bolts along rack posts */}
        {[115, 175, 235, 295, 355, 415, 475].map((y, i) => (
          <React.Fragment key={i}>
            <circle cx="164" cy={y} r="3.5" fill="#0A0A0A" />
            <circle cx="436" cy={y} r="3.5" fill="#0A0A0A" />
          </React.Fragment>
        ))}

        {/* SERVER UNIT 1 (Top) - High Density Compute */}
        <g transform="translate(180, 100)">
          <rect width="240" height="74" rx="12" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="3" />
          {/* Status Bar */}
          <rect x="12" y="12" width="14" height="50" rx="4" fill="#C1522A" stroke="#0A0A0A" strokeWidth="2" />
          {/* Drive Trays */}
          {[36, 68, 100, 132].map((x, i) => (
            <rect key={i} x={x} y="16" width="26" height="42" rx="4" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="2" />
          ))}
          {/* Fan 1 */}
          <g transform="translate(184, 37)">
            <circle r="18" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="2.5" />
            <g className="rack-fan">
              <path d="M0 -15 L3 0 L0 15 L-3 0 Z" fill="#0A0A0A" />
              <path d="M-15 0 L0 3 L15 0 L0 -3 Z" fill="#0A0A0A" />
            </g>
          </g>
          {/* LEDs */}
          <circle cx="220" cy="24" r="4" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="1.5" className="rack-led-green" />
          <circle cx="220" cy="37" r="4" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="1.5" className="rack-led-green" />
          <circle cx="220" cy="50" r="4" fill="#FFE500" stroke="#0A0A0A" strokeWidth="1.5" className="rack-led-amber" />
        </g>

        {/* SERVER UNIT 2 - AI Acceleration Node (Terracota Brand) */}
        <g transform="translate(180, 185)">
          <rect width="240" height="74" rx="12" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="3" />
          <rect x="12" y="14" width="70" height="46" rx="6" fill="#C1522A" stroke="#0A0A0A" strokeWidth="2" />
          <text x="47" y="42" fill="#FFFFFF" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="13" textAnchor="middle">AI CORE</text>
          
          {/* Fan 2 */}
          <g transform="translate(110, 37)">
            <circle r="18" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2.5" />
            <g className="rack-fan">
              <path d="M0 -15 L3 0 L0 15 L-3 0 Z" fill="#C1522A" />
              <path d="M-15 0 L0 3 L15 0 L0 -3 Z" fill="#C1522A" />
            </g>
          </g>
          {/* Fan 3 */}
          <g transform="translate(156, 37)">
            <circle r="18" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2.5" />
            <g className="rack-fan">
              <path d="M0 -15 L3 0 L0 15 L-3 0 Z" fill="#C1522A" />
              <path d="M-15 0 L0 3 L15 0 L0 -3 Z" fill="#C1522A" />
            </g>
          </g>

          {/* Activity Lights */}
          <circle cx="200" cy="24" r="4" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="1.5" className="rack-led-green" />
          <circle cx="216" cy="24" r="4" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="1.5" className="rack-led-green" />
          <circle cx="200" cy="46" r="4" fill="#FFE500" stroke="#0A0A0A" strokeWidth="1.5" className="rack-led-amber" />
          <circle cx="216" cy="46" r="4" fill="#FF3DCB" stroke="#0A0A0A" strokeWidth="1.5" className="rack-led-green" />
        </g>

        {/* SERVER UNIT 3 - Network Switch & Fiber Gate */}
        <g transform="translate(180, 270)">
          <rect width="240" height="74" rx="12" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="3" />
          {/* Ports Matrix */}
          <g transform="translate(16, 20)">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <React.Fragment key={i}>
                <rect x={i * 18} y="4" width="14" height="12" rx="2" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="1.5" />
                <rect x={i * 18} y="20" width="14" height="12" rx="2" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="1.5" />
                <circle cx={i * 18 + 7} cy="0" r="1.5" fill="#B6F23A" className="rack-led-green" />
              </React.Fragment>
            ))}
          </g>
          {/* SFP+ Fiber Uplinks */}
          <rect x="175" y="18" width="22" height="38" rx="4" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2" />
          <rect x="203" y="18" width="22" height="38" rx="4" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2" />
        </g>

        {/* SERVER UNIT 4 - Healthcare Database & Storage Node */}
        <g transform="translate(180, 355)">
          <rect width="240" height="74" rx="12" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="3" />
          {/* Drive bays */}
          {[16, 52, 88, 124, 160].map((x, i) => (
            <g key={i} transform={`translate(${x}, 14)`}>
              <rect width="30" height="46" rx="4" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
              <rect x="6" y="8" width="18" height="6" rx="1" fill="#C1522A" />
              <circle cx="15" cy="36" r="2.5" fill="#B6F23A" className="rack-led-green" />
            </g>
          ))}
          <rect x="200" y="14" width="24" height="46" rx="4" fill="#0A0A0A" />
          <circle cx="212" cy="28" r="4" fill="#B6F23A" className="rack-led-green" />
          <circle cx="212" cy="44" r="4" fill="#FF3DCB" className="rack-led-green" />
        </g>

        {/* SERVER UNIT 5 - UPS & Redundant Power Delivery (N+1) */}
        <g transform="translate(180, 440)">
          <rect width="240" height="70" rx="12" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="3" />
          <rect x="14" y="14" width="90" height="42" rx="6" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2" />
          <text x="59" y="39" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle">UPS // 99.9%</text>

          {/* Battery level blocks */}
          {[120, 142, 164, 186].map((x, i) => (
            <rect key={i} x={x} y="22" width="16" height="26" rx="3" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="1.5" />
          ))}
          <circle cx="216" cy="35" r="7" fill="#C1522A" stroke="#FFFFFF" strokeWidth="2" />
        </g>

        {/* MEDICAL HEARTBEAT MONITOR EXTENSION (Right side pop-out) */}
        <g transform="translate(430, 220)">
          <rect width="140" height="110" rx="16" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="4" />
          <rect x="6" y="6" width="128" height="98" rx="12" fill="#00C2CB" stroke="#0A0A0A" strokeWidth="2" />
          
          {/* ECG Monitor Screen */}
          <rect x="14" y="14" width="112" height="60" rx="6" fill="#0A0A0A" />
          {/* ECG Pulse Path */}
          <path
            d="M 18 44 L 40 44 L 46 26 L 54 58 L 62 36 L 68 46 L 76 44 L 118 44"
            fill="none"
            stroke="#B6F23A"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="600"
            className="ecg-line"
          />

          {/* Metric in monitor */}
          <text x="20" y="92" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="14">72 BPM</text>
          <text x="80" y="92" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="14">99% SPO2</text>
        </g>

        {/* Cable from Switch to Medical Monitor */}
        <path
          d="M 400 300 C 420 300, 420 280, 436 280"
          fill="none"
          stroke="#C1522A"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 400 300 C 420 300, 420 280, 436 280"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* FLOATING STICKER 1: CHIP (Top Left) */}
        <g className="floating-sticker-1" transform="translate(60, 110)">
          <rect width="64" height="64" rx="12" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="3" />
          <rect x="14" y="14" width="36" height="36" rx="6" fill="#0A0A0A" />
          <rect x="22" y="22" width="20" height="20" rx="3" fill="#FFE500" />
          {/* Pins */}
          {[18, 32, 46].map((p, i) => (
            <React.Fragment key={i}>
              <line x1={p} y1="4" x2={p} y2="14" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
              <line x1={p} y1="50" x2={p} y2="60" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
              <line x1="4" y1={p} x2="14" y2={p} stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
              <line x1="50" y1={p} x2="60" y2={p} stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
            </React.Fragment>
          ))}
        </g>

        {/* FLOATING STICKER 2: MEDICAL CROSS (Top Right) */}
        <g className="floating-sticker-2" transform="translate(460, 80)">
          <rect width="60" height="60" rx="16" fill="#FF3DCB" stroke="#0A0A0A" strokeWidth="3" />
          <path
            d="M 23 14 L 37 14 L 37 23 L 46 23 L 46 37 L 37 37 L 37 46 L 23 46 L 23 37 L 14 37 L 14 23 L 23 23 Z"
            fill="#FFFFFF"
            stroke="#0A0A0A"
            strokeWidth="2.5"
          />
        </g>

        {/* FLOATING STICKER 3: CLOUD UPTIME (Bottom Left) */}
        <g className="floating-sticker-3" transform="translate(50, 420)">
          <rect width="76" height="54" rx="14" fill="#FFE500" stroke="#0A0A0A" strokeWidth="3" />
          <path
            d="M 22 36 A 8 8 0 0 1 28 24 A 12 12 0 0 1 48 22 A 10 10 0 0 1 58 32 A 6 6 0 0 1 54 36 Z"
            fill="#FFFFFF"
            stroke="#0A0A0A"
            strokeWidth="2.5"
          />
          <text x="38" y="46" fill="#0A0A0A" fontFamily="Oswald, sans-serif" fontWeight="bold" fontSize="9" textAnchor="middle">HYBRID</text>
        </g>

        {/* Sparkles / Hardware Accents */}
        <g transform="translate(130, 60)">
          <path d="M 10 0 L 13 7 L 20 10 L 13 13 L 10 20 L 7 13 L 0 10 L 7 7 Z" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2" />
        </g>
        <g transform="translate(480, 450)">
          <path d="M 8 0 L 10 6 L 16 8 L 10 10 L 8 16 L 6 10 L 0 8 L 6 6 Z" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

export default HeroRack;
