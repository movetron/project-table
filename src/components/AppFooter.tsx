export const AppFooter = ({ total, sortsCount }: { total: number; sortsCount: number }) => (
  <footer className="bg-white px-6 py-3 border-t border-gray-100 text-xs text-gray-400 flex justify-between items-center shrink-0">
    <div className="flex gap-4">
      <span>
        Всего: <strong>{total}</strong>
      </span>
      {sortsCount > 0 && (
        <span className="text-blue-500 font-medium">Сортировка по {sortsCount} полям</span>
      )}
    </div>
  </footer>
);
