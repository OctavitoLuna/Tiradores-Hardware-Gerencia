import React from 'react';
import { Wifi, Radio, Shield, Globe, Server, Cpu, Activity, Zap, Lock, HardDrive } from 'lucide-react';

/**
 * Logotipo Vectorial Oficial de AXS Bolivia en la paleta corporativa del sitio (Naranja + Negro + Crema)
 */
export function AxsBoliviaLogo({ className = "w-full max-w-[280px]" }: { className?: string }) {
  return (
    <div className={`p-6 rounded-2xl bg-[#111111] border-2 border-primary/40 shadow-hard flex flex-col items-center justify-center text-center relative overflow-hidden group ${className}`}>
      {/* Dynamic Glow */}
      <div className="absolute inset-0 bg-primary/10 opacity-40 group-hover:opacity-70 transition-opacity" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Stylized AXS Typography Icon */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tighter">
            a<span className="text-primary">x</span>s
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse ml-1" />
        </div>

        <div className="h-0.5 w-16 bg-primary/60 mb-2" />

        <span className="font-mono text-xs font-bold text-gray-300 tracking-[0.3em] uppercase">
          BOLIVIA
        </span>
        <span className="font-mono text-[9px] text-primary tracking-widest uppercase mt-1">
          Telecomunicaciones S.A.
        </span>

        <div className="mt-4 pt-3 border-t border-neutral-800 w-full flex items-center justify-center gap-2 text-[10px] font-mono text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Red DWDM de Fibra Óptica</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Logotipo Vectorial de Starlink (SpaceX)
 */
export function StarlinkLogo({ className = "w-full max-w-[280px]" }: { className?: string }) {
  return (
    <div className={`p-6 rounded-2xl bg-[#111111] border-2 border-primary/40 shadow-hard flex flex-col items-center justify-center text-center relative overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-primary/10 opacity-30 group-hover:opacity-60 transition-opacity" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Orbital Trajectory Slash */}
        <svg viewBox="0 0 200 40" className="w-44 h-9 fill-current text-white mb-2">
          <text x="0" y="28" fontFamily="Arial Black, Impact, sans-serif" fontSize="24" letterSpacing="4" fill="#FFFFFF">
            STARLINK
          </text>
          <path d="M 160 8 Q 180 20 195 32" stroke="var(--color-primary, #C1522A)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="160" cy="8" r="2.5" fill="var(--color-primary, #C1522A)" />
        </svg>

        <span className="font-mono text-[10px] text-gray-300 tracking-[0.25em] uppercase">
          BY SPACEX &bull; LEO SATELLITE
        </span>

        <div className="mt-4 pt-3 border-t border-neutral-800 w-full flex items-center justify-center gap-2 text-[10px] font-mono text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Constelación Activa en Bolivia</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Gráfico Editorial "Internet Service Providers" (Teclado / Datacenter / Red)
 */
export function IspKeyboardVisual() {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#111111] rounded-2xl border-2 border-stone-800 p-6 shadow-hard flex flex-col justify-between relative overflow-hidden group">
      {/* Subtle tech background */}
      <div aria-hidden="true" className="absolute inset-0 bg-tech-dots-dark opacity-30 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/20 text-primary rounded">
            <Globe size={18} />
          </div>
          <div>
            <span className="text-white font-display text-sm font-bold block">
              INTERNET SERVICE PROVIDERS
            </span>
            <span className="text-[10px] font-mono text-gray-400">
              Telecom Backbone &bull; Routing Architecture
            </span>
          </div>
        </div>
        <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20">
          CORE TRANSIT
        </span>
      </div>

      {/* Center Visual: Virtual Keypad & Network Flow */}
      <div className="relative z-10 my-4 py-3 grid grid-cols-3 gap-3 font-mono text-xs">
        <div className="bg-[#181818] p-3 rounded-xl border border-neutral-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 mb-1">
            <span className="text-[10px]">GW-01</span>
            <Activity size={12} className="text-primary" />
          </div>
          <span className="text-white font-bold text-sm">DWDM AXS</span>
          <span className="text-[10px] text-emerald-400">99.98% SLA</span>
        </div>

        <div className="bg-[#181818] p-3 rounded-xl border border-neutral-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 mb-1">
            <span className="text-[10px]">LEO-02</span>
            <Zap size={12} className="text-primary" />
          </div>
          <span className="text-white font-bold text-sm">Starlink Failover</span>
          <span className="text-[10px] text-primary">Sincronizado</span>
        </div>

        <div className="bg-[#181818] p-3 rounded-xl border border-neutral-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-400 mb-1">
            <span className="text-[10px]">SEC-03</span>
            <Lock size={12} className="text-primary" />
          </div>
          <span className="text-white font-bold text-sm">RF Shielding</span>
          <span className="text-[10px] text-gray-400">Laboratorio</span>
        </div>
      </div>

      {/* Bottom Technical Telemetry */}
      <div className="relative z-10 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Throughput: Enlace Dedicado 1:1</span>
        </span>
        <span className="text-primary font-bold">LATENCIA: &lt; 15ms</span>
      </div>
    </div>
  );
}

/**
 * Fotografía / Ilustración Técnica de Inhibidor de Señales Móviles (Multi-antena)
 */
export function SignalJammerVisual() {
  return (
    <div className="w-full h-full min-h-[320px] bg-[#111111] rounded-2xl border-2 border-stone-800 p-6 shadow-hard flex flex-col justify-between relative overflow-hidden group">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-primary/10 opacity-30 pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/20 text-primary rounded">
            <Radio size={18} />
          </div>
          <div>
            <span className="text-white font-display text-sm font-bold block">
              DISPOSITIVO INHIBIDOR DE FRECUENCIAS
            </span>
            <span className="text-[10px] font-mono text-gray-400">
              RF Jammer &bull; Barrera Electromagnética Táctica
            </span>
          </div>
        </div>
        <span className="text-[10px] font-mono bg-rose-950/80 text-rose-300 px-2 py-0.5 rounded border border-rose-700/50">
          ZONA BLINDADA
        </span>
      </div>

      {/* Graphic representation of multi-antenna jammer chassis */}
      <div className="relative z-10 my-4 flex flex-col items-center justify-center">
        {/* 8 Antennas Array Graphic */}
        <div className="flex items-end justify-center gap-2 mb-2">
          {[48, 56, 64, 70, 70, 64, 56, 48].map((height, i) => (
            <div key={i} className="flex flex-col items-center group/ant">
              <div 
                className="w-1.5 rounded-t bg-stone-400 border-x border-stone-600 transition-all duration-300 group-hover/ant:bg-primary"
                style={{ height: `${height}px` }}
              />
              <div className="w-2.5 h-1.5 bg-amber-600 rounded-sm" />
            </div>
          ))}
        </div>

        {/* Heavy Aluminum Chassis */}
        <div className="w-full max-w-[320px] bg-gradient-to-b from-[#252525] to-[#161616] border-2 border-neutral-700 rounded-xl p-4 shadow-2xl relative">
          {/* Heat sink fins */}
          <div className="flex justify-between gap-1 mb-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-2 w-full bg-[#333] rounded-sm" />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono font-bold text-white">MULTIBAND PRO-8</div>
              <div className="text-[9px] font-mono text-gray-400">2G / 3G / 4G / 5G / Wi-Fi / GPS</div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-primary font-bold">ACTIVO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Specs */}
      <div className="relative z-10 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-gray-400">
        <span>Alcance: Radio de 5m a 50m</span>
        <span className="text-primary font-semibold">CONFIDENCIALIDAD I+D</span>
      </div>
    </div>
  );
}
