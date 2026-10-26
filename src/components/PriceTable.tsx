import React from 'react';
import { PriceRow, leyendaPreciosComun } from '../data/serviciosData';
import { Info } from 'lucide-react';

export interface PriceTableProps {
  columns: string[];
  rows: PriceRow[];
  fuente?: string;
  notaEspecial?: string;
  mostrarLeyenda?: boolean;
  actionButton?: React.ReactNode;
}

export default function PriceTable({
  columns,
  rows,
  fuente,
  notaEspecial,
  mostrarLeyenda = true,
  actionButton,
}: PriceTableProps) {
  return (
    <div className="w-full my-4">
      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto rounded-xl border-2 border-stone-300 shadow-hard bg-white">
        <table className="w-full text-left border-collapse min-w-[580px]">
          {/* Encabezado Negro */}
          <thead>
            <tr className="bg-[#111111] text-white">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-5 py-4 text-xs font-mono font-bold uppercase tracking-wider text-gray-200 border-b border-neutral-800 ${
                    idx === columns.length - 1 ? 'text-right' : ''
                  }`}
                >
                  {col}
                </th>
              ))}
              {actionButton ? <th className="px-5 py-4 text-xs font-mono font-bold uppercase tracking-wider text-right border-b border-neutral-800">Acción</th> : null}
            </tr>
          </thead>

          {/* Filas Alternas Crema */}
          <tbody className="divide-y divide-stone-200 font-sans">
            {rows.map((row, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    isEven ? 'bg-[#FDFBF7]' : 'bg-white'
                  } hover:bg-primary/5`}
                >
                  {/* Plan Name */}
                  <td className="px-5 py-3.5 text-surface font-display text-sm sm:text-base font-semibold">
                    {row.plan}
                  </td>

                  {/* Bajada */}
                  {row.bajada && (
                    <td className="px-5 py-3.5 text-xs sm:text-sm text-foreground-muted font-mono">
                      {row.bajada}
                    </td>
                  )}

                  {/* Subida */}
                  {row.subida && (
                    <td className="px-5 py-3.5 text-xs sm:text-sm text-foreground-muted font-mono">
                      {row.subida}
                    </td>
                  )}

                  {/* Bajada y Subida (Simétrico) */}
                  {row.bajadaSubida && (
                    <td className="px-5 py-3.5 text-xs sm:text-sm text-foreground-muted font-mono">
                      {row.bajadaSubida}
                    </td>
                  )}

                  {/* Uso / Modalidad */}
                  {row.uso && (
                    <td className="px-5 py-3.5 text-xs sm:text-sm text-foreground-muted font-sans">
                      {row.uso}
                    </td>
                  )}

                  {/* Datos prioritarios */}
                  {row.datos && (
                    <td className="px-5 py-3.5 text-xs sm:text-sm text-foreground-muted font-mono">
                      {row.datos}
                    </td>
                  )}

                  {/* Alcance (Inhibidor) */}
                  {row.alcance && (
                    <td className="px-5 py-3.5 text-xs sm:text-sm text-foreground-muted font-sans">
                      {row.alcance}
                    </td>
                  )}

                  {/* Observaciones (Inhibidor) */}
                  {row.observaciones && (
                    <td className="px-5 py-3.5 text-xs text-foreground-muted font-sans">
                      {row.observaciones}
                    </td>
                  )}

                  {/* Cifras en Naranja */}
                  <td className="px-5 py-3.5 text-right whitespace-nowrap font-mono font-bold text-primary text-base sm:text-lg">
                    {row.tarifaBs}
                  </td>

                  {actionButton && (
                    <td className="px-5 py-3.5 text-right whitespace-nowrap">
                      {actionButton}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Metadatos y Leyenda al pie */}
      <div className="mt-3 space-y-1.5 font-sans">
        {fuente && (
          <p className="text-xs text-foreground-muted italic leading-relaxed">
            <strong className="font-semibold text-surface">Fuente:</strong> {fuente}
          </p>
        )}

        {notaEspecial && (
          <p className="text-xs text-primary font-medium leading-relaxed">
            {notaEspecial}
          </p>
        )}

        {mostrarLeyenda && (
          <div className="flex items-start gap-2 bg-stone-100 p-2.5 rounded-lg border border-stone-200 text-[11px] text-stone-600 leading-relaxed">
            <Info size={14} className="text-primary shrink-0 mt-0.5" />
            <span>{leyendaPreciosComun}</span>
          </div>
        )}
      </div>
    </div>
  );
}
