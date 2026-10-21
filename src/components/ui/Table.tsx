import React from 'react';
import { cn } from '../../lib/utils';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  wrapperClassName?: string;
}

export const Table: React.FC<TableProps> = ({ className, wrapperClassName, children, ...props }) => {
  return (
    <div className={cn('w-full overflow-x-auto rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal bg-white', wrapperClassName)}>
      <table className={cn('w-full text-left border-collapse min-w-[600px]', className)} {...props}>
        {children}
      </table>
    </div>
  );
};

export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className, children, ...props }) => {
  return (
    <thead className={cn('bg-[#0A0A0A] text-[#FAF5DC] border-b-[3px] border-[#0A0A0A]', className)} {...props}>
      {children}
    </thead>
  );
};

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ className, children, ...props }) => {
  return (
    <tr className={cn('border-b-[2px] border-[#0A0A0A]/20 hover:bg-[#FAF5DC] transition-colors', className)} {...props}>
      {children}
    </tr>
  );
};

export const TableHead: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({ className, children, ...props }) => {
  return (
    <th className={cn('p-4 font-display text-sm md:text-base font-bold uppercase tracking-wider', className)} {...props}>
      {children}
    </th>
  );
};

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ className, children, ...props }) => {
  return (
    <td className={cn('p-4 text-sm md:text-base text-[#0A0A0A] font-medium align-middle', className)} {...props}>
      {children}
    </td>
  );
};

export default Table;
