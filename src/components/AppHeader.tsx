import { Activity, Layers, XCircle } from 'lucide-react';

export const AppHeader = ({
  isLoading,
  showActiveOnly,
  setShowActiveOnly,
  onReset,
  sortsCount,
}: any) => (
  <header className="sticky top-0 z-30 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#1b2838]/95 backdrop-blur-md py-6 border-b border-[#2a475e] shadow-2xl">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-gradient-to-br from-[#66c0f4] to-[#3d6c8d] rounded-lg shadow-[0_0_20px_rgba(102,192,244,0.2)]">
        <Layers className="text-[#171a21]" size={28} />
      </div>
      <div>
        <h1 className="text-2xl font-black uppercase tracking-[0.15em] text-white italic leading-none">
          Steam <span className="text-[#66c0f4]">Accounts</span>
        </h1>
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8f98a0] mt-1 flex items-center gap-2">
          {isLoading ? (
            <>
              <Activity size={12} className="animate-spin text-[#66c0f4]" />
              Синхронизация данных...
            </>
          ) : (
            'Панель управления аккаунтами'
          )}
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3 bg-[#171a21]/80 p-1.5 rounded-sm border border-[#2a475e]">
      <div className="flex items-center gap-2 border-r border-[#2a475e] pr-4 pl-2">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              checked={showActiveOnly}
              onChange={(e) => setShowActiveOnly(e.target.checked)}
              disabled={isLoading}
              className="peer appearance-none w-4 h-4 bg-[#1b2838] border border-[#2a475e] rounded-sm checked:bg-[#66c0f4] checked:border-[#66c0f4] transition-all cursor-pointer disabled:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[#171a21] opacity-0 peer-checked:opacity-100 transition-opacity">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider text-[#c6d4df] group-hover:text-white transition-colors">
            Только активные
          </span>
        </label>
      </div>

      <button
        onClick={onReset}
        disabled={sortsCount === 0 || isLoading}
        className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all ${
          sortsCount > 0 && !isLoading
            ? 'bg-[#cd5444] text-white hover:brightness-125 shadow-[0_0_10px_rgba(205,84,68,0.3)]'
            : 'bg-[#2a475e]/30 text-[#4e5a63] cursor-not-allowed opacity-50'
        }`}
      >
        <XCircle size={14} />
        Сбросить параметры
      </button>
    </div>
  </header>
);
