import { Filter } from 'lucide-react';
import { RAW_DATA } from './data/mockData';
import { TableRow } from './components/TableRow';
import { AppHeader } from './components/AppHeader';
import { useTreeData } from './hooks/useTreeData';
import { TableHeader } from './components/TableHeader';
import { TableSkeleton } from './components/TableSkeleton';
import { AppFooter } from './components/AppFooter';

export default function App() {
  const {
    treeData,
    expandedIds,
    sorts,
    showActiveOnly,
    isLoading,
    setShowActiveOnly,
    toggleExpand,
    handleSort,
    resetSorts,
  } = useTreeData(RAW_DATA);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-4">
        <AppHeader
          isLoading={isLoading}
          showActiveOnly={showActiveOnly}
          setShowActiveOnly={setShowActiveOnly}
          onReset={resetSorts}
          sortsCount={sorts.length}
        />

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col max-h-[75vh]">
          <div className="overflow-auto  relative border-b border-gray-100">
            <table className="w-full text-left border-collapse table-fixed">
              <TableHeader onSort={handleSort} sorts={sorts} />

              <tbody className="bg-white divide-y divide-gray-50">
                {isLoading ? (
                  <TableSkeleton />
                ) : treeData.length > 0 ? (
                  treeData.map((node) => (
                    <TableRow
                      key={node.id}
                      node={node}
                      expandedIds={expandedIds}
                      toggleExpand={toggleExpand}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-20 text-center text-gray-400">
                      <div className="flex flex-col items-center gap-2">
                        <Filter size={32} className="text-gray-200" />
                        <span className="italic">Записей не найдено</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <AppFooter total={RAW_DATA.length} sortsCount={sorts.length} />
        </div>
      </div>
    </div>
  );
}
