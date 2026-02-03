export interface RawDataItem {
  id: number;
  parentId: number;
  isActive: boolean;
  balance: string;
  name: string;
  email: string;
}

export interface TreeNode extends RawDataItem {
  children: TreeNode[];
  numericBalance: number;
  depth: number;
}

export type SortField = 'email' | 'balance';
export type SortDirection = 'asc' | 'desc' | null;

export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}
