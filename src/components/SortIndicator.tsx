import { ArrowDown, ArrowUp, ListFilter } from 'lucide-react';
import type { SortConfig, SortField } from '../types';

export const SortIndicator: React.FC<{ field: SortField; sorts: SortConfig[] }> = ({
  field,
  sorts,
}) => {
  const configIdx = sorts.findIndex((s) => s.field === field);
  const config = sorts[configIdx];
  if (!config || config.direction === null)
    return (
      <ListFilter
        size={14}
        className="text-gray-300 ml-1 opacity-20 group-hover:opacity-100 transition-opacity"
      />
    );
  return (
    <div className="flex items-center gap-1 ml-1 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 flex-shrink-0 animate-fadeIn">
      {config.direction === 'asc' ? (
        <ArrowUp size={14} className="text-blue-600" />
      ) : (
        <ArrowDown size={14} className="text-blue-600" />
      )}
      <span className="text-[10px] text-blue-500 font-bold">{configIdx + 1}</span>
    </div>
  );
};
