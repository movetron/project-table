export const TableSkeleton = () => (
  <>
    {[1, 2, 3, 4, 5].map((i) => (
      <tr key={i} className="border-b border-[#2a475e]/30 animate-pulse">
        <td className="py-4 px-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#2a475e]/50 rounded"></div>
            <div className="w-8 h-8 bg-[#2a475e]/50 rounded-full"></div>
            <div className="h-4 bg-[#2a475e]/50 rounded w-32"></div>
          </div>
        </td>
        <td className="px-4 py-3">
          <div className="h-4 bg-[#2a475e]/50 rounded w-48"></div>
        </td>
        <td className="px-4 py-3">
          <div className="h-4 bg-[#2a475e]/50 rounded w-24"></div>
        </td>
        <td className="px-4 py-3">
          <div className="h-6 bg-[#2a475e]/50 rounded-full w-20"></div>
        </td>
      </tr>
    ))}
  </>
);
