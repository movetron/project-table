import { Database, Filter } from 'lucide-react';
import { RAW_DATA } from './data/mockData';
import { TableRow } from './components/TableRow';
import { AppHeader } from './components/AppHeader';
import { useTreeData } from './hooks/useTreeData';
import { TableHeader } from './components/TableHeader';
import { TableSkeleton } from './components/TableSkeleton';
import { AppFooter } from './components/AppFooter';
import { EmptyState } from './components/EmptyState';
import { ErrorBoundary } from './components/ErrorBoundary';

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

  const isEmptyData = RAW_DATA.length === 0;
  const isFilteredEmpty = RAW_DATA.length > 0 && treeData.length === 0;

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] p-4 md:p-8 font-sans selection:bg-[#66c0f4] selection:text-white">
      <div className="max-w-6xl mx-auto space-y-4">
        <AppHeader
          isLoading={isLoading}
          showActiveOnly={showActiveOnly}
          setShowActiveOnly={setShowActiveOnly}
          onReset={resetSorts}
          sortsCount={sorts.length}
        />

        <div className="bg-[#171a21]/60 rounded-2xl shadow-xl border border-[#2a475e] backdrop-blur-sm overflow-hidden flex flex-col max-h-[75vh]">
          <ErrorBoundary>
            <div className="overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-[#2a475e] scrollbar-track-[#171a21] relative">
              <table className="w-full min-w-[800px] text-left border-collapse table-fixed">
                <TableHeader onSort={handleSort} sorts={sorts} />
                <tbody className="divide-y divide-[#2a475e]/10">
                  {isLoading ? (
                    <TableSkeleton />
                  ) : isEmptyData ? (
                    <EmptyState
                      icon={<Database size={32} className="text-[#4e5a63] " />}
                      title="Данных пока нет"
                      description="Попробуйте загрузить данные позже"
                    />
                  ) : isFilteredEmpty ? (
                    <EmptyState
                      icon={<Filter size={32} className="text-[#4e5a63] " />}
                      title="Записей не найдено"
                      description="Попробуйте изменить фильтры"
                    />
                  ) : (
                    treeData.map((node) => (
                      <TableRow
                        key={node.id}
                        node={node}
                        expandedIds={expandedIds}
                        toggleExpand={toggleExpand}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </ErrorBoundary>
          <AppFooter total={RAW_DATA.length} sortsCount={sorts.length} />
        </div>
      </div>
    </div>
  );
}
