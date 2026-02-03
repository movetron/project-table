import type { RawDataItem, TreeNode } from '../types';

export const parseCurrency = (value: string): number => {
  return parseFloat(value.replace(/[$,]/g, ''));
};

export const buildTree = (items: RawDataItem[]): TreeNode[] => {
  const itemMap = new Map<number, TreeNode>();
  const roots: TreeNode[] = [];

  items.forEach((item) => {
    itemMap.set(item.id, {
      ...item,
      children: [],
      numericBalance: parseCurrency(item.balance),
      depth: 0,
    });
  });

  items.forEach((item) => {
    const node = itemMap.get(item.id)!;
    if (item.parentId === 0) {
      roots.push(node);
    } else {
      const parent = itemMap.get(item.parentId);
      if (parent) {
        node.depth = parent.depth + 1;
        parent.children.push(node);
      } else {
        roots.push(node);
      }
    }
  });

  const setDepthRecursive = (nodes: TreeNode[], depth: number) => {
    nodes.forEach((node) => {
      node.depth = depth;
      if (node.children.length > 0) setDepthRecursive(node.children, depth + 1);
    });
  };
  setDepthRecursive(roots, 0);

  return roots;
};

export const filterTree = (nodes: TreeNode[], showActiveOnly: boolean): TreeNode[] => {
  if (!showActiveOnly) return nodes;
  return nodes.reduce<TreeNode[]>((acc, node) => {
    const filteredChildren = filterTree(node.children, showActiveOnly);
    if (node.isActive) {
      acc.push({ ...node, children: filteredChildren });
    }
    return acc;
  }, []);
};
