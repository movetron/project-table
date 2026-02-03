export const TableSkeleton = () => (
  <>
    {[1, 2, 3, 4, 5].map((i) => (
      <tr key={i} className="border-b border-gray-100 animate-pulse">
        <td className="py-4 px-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </td>
        <td className="px-4 py-3">
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </td>
        <td className="px-4 py-3">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </td>
        <td className="px-4 py-3">
          <div className="h-6 bg-gray-200 rounded-full w-20"></div>
        </td>
      </tr>
    ))}
  </>
);
