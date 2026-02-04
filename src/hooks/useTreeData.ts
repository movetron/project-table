import { useEffect, useMemo, useState } from 'react';
import type { RawDataItem, SortConfig, SortDirection, SortField } from '../types';
import { buildTree, filterTree } from '../utils/treeUtils';
import { sortNodesMulti } from '../utils/sortUtils';

export const useTreeData = (rawData: RawDataItem[]) => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [sorts, setSorts] = useState<SortConfig[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const normalizedData = useMemo<RawDataItem[]>(() => {
    return rawData.map((item) => ({
      ...item,
      name: item.name ?? '—',
      balance: item.balance ?? '$0.00',
    }));
  }, [rawData]);

  const initialTree = useMemo(() => buildTree(normalizedData), [normalizedData]);

  const processedTree = useMemo(() => {
    if (isLoading) return [];
    let nodes = filterTree(initialTree, showActiveOnly);
    nodes = JSON.parse(JSON.stringify(nodes));
    return sortNodesMulti(nodes, sorts);
  }, [initialTree, sorts, showActiveOnly, isLoading]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSort = (field: SortField) => {
    setSorts((currentSorts) => {
      const existingIdx = currentSorts.findIndex((s) => s.field === field);
      let nextDirection: SortDirection = 'asc';
      if (existingIdx !== -1) {
        const currentDir = currentSorts[existingIdx].direction;
        nextDirection = currentDir === 'asc' ? 'desc' : currentDir === 'desc' ? null : 'asc';
      }
      const filtered = currentSorts.filter((s) => s.field !== field);
      return nextDirection !== null ? [{ field, direction: nextDirection }, ...filtered] : filtered;
    });
  };

  const resetSorts = () => setSorts([]);

  return {
    treeData: processedTree,
    expandedIds,
    sorts,
    showActiveOnly,
    isLoading,
    setShowActiveOnly,
    toggleExpand,
    handleSort,
    resetSorts,
  };
};
