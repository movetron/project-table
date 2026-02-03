import type { SortConfig, TreeNode } from '../types';

export const sortNodesMulti = (nodes: TreeNode[], sorts: SortConfig[]): TreeNode[] => {
  const activeSorts = sorts.filter((s) => s.direction !== null);
  if (activeSorts.length === 0) return nodes;

  const sorted = [...nodes].sort((a, b) => {
    for (const sort of activeSorts) {
      let valA: string | number = '';
      let valB: string | number = '';

      if (sort.field === 'balance') {
        valA = a.numericBalance;
        valB = b.numericBalance;
      } else if (sort.field === 'email') {
        valA = a.email.toLowerCase();
        valB = b.email.toLowerCase();
      }

      if (valA !== valB) {
        const modifier = sort.direction === 'asc' ? 1 : -1;
        return valA < valB ? -1 * modifier : 1 * modifier;
      }
    }
    return 0;
  });

  sorted.forEach((node) => {
    if (node.children.length > 0) {
      node.children = sortNodesMulti(node.children, activeSorts);
    }
  });

  return sorted;
};
