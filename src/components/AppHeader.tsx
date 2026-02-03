import { Activity, Layers, XCircle } from 'lucide-react';

export const AppHeader = ({
  isLoading,
  showActiveOnly,
  setShowActiveOnly,
  onReset,
  sortsCount,
}: any) => (
  <header className="sticky top-0 z-30 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/80 backdrop-blur-md py-4">
    <div>
      <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        <Layers className="text-blue-600" /> Работа с таблицей аккаунтов
      </h1>
      <p className="text-sm text-slate-500 mt-1">
        {isLoading ? 'Загрузка данных...' : 'Просмотр и сортировка данных'}
      </p>
    </div>
    <div className="flex items-center gap-3 bg-white p-2 rounded-xl shadow-sm border border-gray-200">
      {isLoading && <Activity className="animate-spin text-blue-500 mr-2" size={16} />}
      <div className="flex items-center gap-2 border-r border-gray-100 pr-3">
        <label className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
          <input
            type="checkbox"
            checked={showActiveOnly}
            onChange={(e) => setShowActiveOnly(e.target.checked)}
            disabled={isLoading}
            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Только активные
          </span>
        </label>
      </div>
      <button
        onClick={onReset}
        disabled={sortsCount === 0 || isLoading}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${sortsCount > 0 && !isLoading ? 'text-red-600 hover:bg-red-50' : 'text-gray-300 cursor-not-allowed'}`}
      >
        <XCircle size={16} /> Сбросить всё
      </button>
    </div>
  </header>
);
