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
          className={`border-b border-gray-100 hover:bg-slate-50 transition-colors duration-150 group ${!node.isActive ? 'opacity-60 bg-gray-50' : ''}`}
        >
          <td
            className="py-3 pr-4 text-sm font-medium text-gray-900 overflow-hidden"
            style={{ paddingLeft }}
          >
            <div className="flex items-center gap-2 max-w-full">
              {hasChildren ? (
                <button
                  onClick={() => toggleExpand(node.id)}
                  className="p-1 flex-shrink-0 rounded-md hover:bg-gray-200 text-gray-500 transition-transform"
                  aria-label={isExpanded ? 'Свернуть' : 'Развернуть'}
                >
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
              ) : (
                <span className="w-6 h-6 flex-shrink-0" />
              )}
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold uppercase">
                  {node.name.charAt(0)}
                </div>
                <span className="truncate" title={node.name}>
                  {node.name}
                </span>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-sm text-gray-600 overflow-hidden">
            <div className="truncate max-w-[200px]" title={node.email}>
              {node.email}
            </div>
          </td>
          <td className="px-4 py-3 text-sm text-gray-700 font-mono whitespace-nowrap">
            {node.balance}
          </td>
          <td className="px-4 py-3 text-sm whitespace-nowrap">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                node.isActive
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                  : 'bg-red-50 text-red-700 border-red-100'
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
