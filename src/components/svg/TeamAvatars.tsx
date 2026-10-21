import React from 'react';
import { cn } from '../../lib/utils';

export interface AvatarProps {
  member: 'octavio' | 'leandro' | 'einar' | 'huascar' | 'leonardo';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
}

export const TeamAvatar: React.FC<AvatarProps> = ({
  member,
  size = 'md',
  className,
  showBadge = false
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const memberData = {
    octavio: {
      name: 'Octavio Luna',
      role: 'Líder / Scrum Master',
      bgColor: '#C1522A', // Terracota
      toolColor: '#FFE500',
      capColor: '#0A0A0A',
      accessory: 'Wrench & Laptop',
      mbti: 'ENFP'
    },
    leandro: {
      name: 'Leandro Colque',
      role: 'Dirección de Tecnología / PO',
      bgColor: '#3B6BFF', // Blue
      toolColor: '#FFE500',
      capColor: '#FFFFFF',
      accessory: 'Calculadora & Gráfico',
      mbti: 'ENTJ'
    },
    einar: {
      name: 'Einar Guillén',
      role: 'Infraestructura Global',
      bgColor: '#B6F23A', // Lime
      toolColor: '#FF3DCB',
      capColor: '#0A0A0A',
      accessory: 'Caja Rack & Cable',
      mbti: 'ESFP'
    },
    huascar: {
      name: 'Huáscar Durán',
      role: 'Calidad & Normativas',
      bgColor: '#00C2CB', // Teal
      toolColor: '#FFE500',
      capColor: '#C1522A',
      accessory: 'Lupa & Escudo ISO',
      mbti: 'INFJ'
    },
    leonardo: {
      name: 'Leonardo Ibarra',
      role: 'Soporte & Entorno',
      bgColor: '#FF3DCB', // Magenta
      toolColor: '#B6F23A',
      capColor: '#00C2CB',
      accessory: 'Auriculares Helpdesk',
      mbti: 'ENFP'
    }
  };

  const data = memberData[member];

  return (
    <div className={cn('relative inline-block select-none group', className)}>
      <div
        className={cn(
          'rounded-full border-[3px] border-[#0A0A0A] shadow-brutal-sm overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 group-hover:-translate-y-1',
          sizeMap[size]
        )}
        style={{ backgroundColor: data.bgColor }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle cx="50" cy="50" r="48" fill={data.bgColor} />

          {/* Shoulders / Shirt */}
          <path
            d="M 18 96 C 18 72, 82 72, 82 96 Z"
            fill="#0A0A0A"
            stroke="#0A0A0A"
            strokeWidth="3"
          />
          <path
            d="M 32 78 L 50 90 L 68 78"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Neck */}
          <rect x="42" y="60" width="16" height="16" rx="4" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="3" />

          {/* Head */}
          <circle cx="50" cy="46" r="22" fill="#FAF5DC" stroke="#0A0A0A" strokeWidth="3.5" />

          {/* Specific hair/caps by member */}
          {member === 'octavio' && (
            // Cap + glasses
            <>
              <path d="M 28 38 C 28 22, 72 22, 72 38 Z" fill={data.capColor} stroke="#0A0A0A" strokeWidth="3" />
              <path d="M 24 38 L 76 38" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
              {/* Glasses */}
              <circle cx="41" cy="46" r="6" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2.5" />
              <circle cx="59" cy="46" r="6" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2.5" />
              <line x1="47" y1="46" x2="53" y2="46" stroke="#0A0A0A" strokeWidth="3" />
              {/* Eyes dots */}
              <circle cx="41" cy="46" r="2" fill="#0A0A0A" />
              <circle cx="59" cy="46" r="2" fill="#0A0A0A" />
              {/* Big Smile */}
              <path d="M 43 56 Q 50 62 57 56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
            </>
          )}

          {member === 'leandro' && (
            // Focused hair + tie
            <>
              <path d="M 26 40 C 26 20, 74 20, 74 40 L 70 32 L 50 26 L 30 32 Z" fill={data.capColor} stroke="#0A0A0A" strokeWidth="3" />
              {/* Eyes confident */}
              <circle cx="40" cy="44" r="2.5" fill="#0A0A0A" />
              <circle cx="60" cy="44" r="2.5" fill="#0A0A0A" />
              <line x1="36" y1="38" x2="44" y2="40" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
              <line x1="56" y1="40" x2="64" y2="38" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
              {/* Smirk */}
              <path d="M 45 56 Q 52 58 57 53" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
              {/* Tie */}
              <path d="M 47 78 L 53 78 L 55 96 L 45 96 Z" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2" />
            </>
          )}

          {member === 'einar' && (
            // Beanie + headphones on neck
            <>
              <path d="M 28 42 C 28 20, 72 20, 72 42 Z" fill="#FF3DCB" stroke="#0A0A0A" strokeWidth="3" />
              <rect x="26" y="38" width="48" height="8" rx="3" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2.5" />
              {/* Eyes energetic */}
              <circle cx="41" cy="48" r="3" fill="#0A0A0A" />
              <circle cx="59" cy="48" r="3" fill="#0A0A0A" />
              {/* Big energetic grin */}
              <path d="M 42 58 Q 50 66 58 58" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
            </>
          )}

          {member === 'huascar' && (
            // Thoughtful, round glasses, focused
            <>
              <path d="M 26 44 C 26 22, 74 22, 74 44 C 70 34, 30 34, 26 44 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="3" />
              {/* Rectangular quality inspector glasses */}
              <rect x="34" y="42" width="13" height="10" rx="2" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2.5" />
              <rect x="53" y="42" width="13" height="10" rx="2" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2.5" />
              <line x1="47" y1="46" x2="53" y2="46" stroke="#0A0A0A" strokeWidth="2.5" />
              <circle cx="40" cy="47" r="1.5" fill="#0A0A0A" />
              <circle cx="60" cy="47" r="1.5" fill="#0A0A0A" />
              {/* Meticulous gentle smile */}
              <path d="M 45 58 Q 50 61 55 58" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </>
          )}

          {member === 'leonardo' && (
            // Support headset + mic
            <>
              <path d="M 28 42 C 28 22, 72 22, 72 42 Z" fill="#FFE500" stroke="#0A0A0A" strokeWidth="3" />
              {/* Headset Arc */}
              <path d="M 24 46 C 24 22, 76 22, 76 46" stroke="#0A0A0A" strokeWidth="4" fill="none" />
              {/* Ear pads */}
              <rect x="20" y="42" width="8" height="14" rx="3" fill="#FF3DCB" stroke="#0A0A0A" strokeWidth="2" />
              <rect x="72" y="42" width="8" height="14" rx="3" fill="#FF3DCB" stroke="#0A0A0A" strokeWidth="2" />
              {/* Mic boom */}
              <path d="M 26 52 Q 34 64 46 62" stroke="#0A0A0A" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="47" cy="62" r="3" fill="#B6F23A" stroke="#0A0A0A" strokeWidth="1.5" />
              {/* Eyes & smile */}
              <circle cx="41" cy="46" r="2.5" fill="#0A0A0A" />
              <circle cx="59" cy="46" r="2.5" fill="#0A0A0A" />
              <path d="M 43 56 Q 50 63 57 56" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
            </>
          )}
        </svg>
      </div>

      {showBadge && (
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md border-[2px] border-[#0A0A0A] bg-[#FFE500] text-[10px] font-display font-bold uppercase shadow-[1px_1px_0_#0A0A0A] whitespace-nowrap">
          {data.mbti}
        </span>
      )}
    </div>
  );
};

export default TeamAvatar;
