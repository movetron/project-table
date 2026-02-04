import { type ReactNode } from 'react';

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
};

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <tr>
      <td colSpan={4} className="px-6 py-20 text-center text-[#4e5a63]">
        <div className="flex flex-col items-center gap-2">
          {icon}
          <span className="font-medium">{title}</span>
          {description && <span className="text-sm italic text-[#4e5a63]">{description}</span>}
        </div>
      </td>
    </tr>
  );
}
