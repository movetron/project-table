export const AppFooter = ({ total, sortsCount }: { total: number; sortsCount: number }) => (
  <footer className="bg-[#171a21]  px-6 py-3 border-t border-[#2a475e] text-xs text-[#4e5a63] flex justify-between items-center shrink-0">
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
