import { DollarSign, Mail } from 'lucide-react';
import type { SortConfig, SortField } from '../types';
import { SortIndicator } from './SortIndicator';

export const TableHeader = ({
  onSort,
  sorts,
}: {
  onSort: (f: SortField) => void;
  sorts: SortConfig[];
}) => (
  <thead className="sticky top-0 z-20 bg-gray-50 shadow-sm">
    <tr className="text-xs uppercase tracking-wider text-gray-500">
      <th
        scope="col"
        className="px-6 py-4 font-semibold w-[40%] bg-gray-50 border-b border-gray-200"
      >
        Имя
      </th>
      <th
        scope="col"
        onClick={() => onSort('email')}
        aria-sort={
          sorts.find((s) => s.field === 'email')?.direction === 'asc' ? 'ascending' : 'descending'
        }
        className="px-4 py-4 font-semibold cursor-pointer group hover:bg-gray-100 transition-all w-[30%] select-none border-b border-gray-200"
      >
        <div className="flex items-center min-w-0">
          <Mail size={14} className="mr-2" /> Почта <SortIndicator field="email" sorts={sorts} />
        </div>
      </th>
      <th
        scope="col"
        onClick={() => onSort('balance')}
        aria-sort={
          sorts.find((s) => s.field === 'balance')?.direction === 'asc' ? 'ascending' : 'descending'
        }
        className="px-4 py-4 font-semibold cursor-pointer group hover:bg-gray-100 transition-all w-[15%] select-none border-b border-gray-200"
      >
        <div className="flex items-center min-w-0">
          <DollarSign size={14} className="mr-2" /> Баланс{' '}
          <SortIndicator field="balance" sorts={sorts} />
        </div>
      </th>
      <th scope="col" className="px-4 py-4 font-semibold w-[15%] border-b border-gray-200">
        Статус
      </th>
    </tr>
  </thead>
);
