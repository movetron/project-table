import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { TreeNode } from '../types';

export const TableRow = React.memo(
  ({
    node,
    expandedIds,
    toggleExpand,
  }: {
    node: TreeNode;
    expandedIds: Set<number>;
    toggleExpand: (id: number) => void;
  }) => {
    const isExpanded = expandedIds.has(node.id);
    const hasChildren = node.children.length > 0;
    const paddingLeft = `${Math.min(node.depth * 24 + 16, 160)}px`;

    return (
      <>
        <tr
          className={`border-b border-[#2a475e]/20 transition-all group ${node.isActive ? 'hover:bg-[#3d6c8d]/20' : 'opacity-40 bg-[#171a21]/50'}`}
        >
          <td
            className="py-3 pr-4 text-sm font-medium text-gray-900 overflow-hidden"
            style={{ paddingLeft }}
          >
            <div className="flex items-center gap-2 max-w-full">
              {hasChildren ? (
                <button
                  onClick={() => toggleExpand(node.id)}
                  className="p-1 flex-shrink-0 rounded-md text-[#66c0f4] hover:text-white transition-colors"
                  aria-label={isExpanded ? 'Свернуть' : 'Развернуть'}
                >
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
              ) : (
                <span className="w-6 h-6 flex-shrink-0" />
              )}
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-bold ${node.isActive ? 'bg-[#66c0f4] text-[#171a21]' : 'bg-[#2a475e] text-[#66c0f4]'}`}
                >
                  {node.name.charAt(0)}
                </div>
                <span className="text-[#c6d4df] font-medium truncate" title={node.name}>
                  {node.name ?? <span className="itali text-[#4e5a63]">Без имени</span>}
                </span>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-sm text-[#8f98a0] overflow-hidden">
            <div className="truncate max-w-[200px]" title={node.email}>
              {node.email}
            </div>
          </td>
          <td className="px-4 py-3 text-sm text-[#66c0f4] font-mono whitespace-nowrap">
            {node.balance}
          </td>
          <td className="px-4 py-3 text-xs uppercase tracking-tighter whitespace-nowrap">
            <span
              className={`px-2 py-0.5 rounded-sm border ${
                node.isActive
                  ? 'text-[#a3cf06] border-[#a3cf06]/30 bg-[#a3cf06]/10'
                  : 'text-[#cd5444] border-[#cd5444]/30 bg-[#cd5444]/10'
              }`}
            >
              {node.isActive ? 'Активен' : 'Неактивен'}
            </span>
          </td>
        </tr>
        {isExpanded &&
          node.children.map((child) => (
            <TableRow
              key={child.id}
              node={child}
              expandedIds={expandedIds}
              toggleExpand={toggleExpand}
            />
          ))}
      </>
    );
  },
);
