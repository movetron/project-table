import { AlertTriangle } from 'lucide-react';
import { Component, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('ErrorBoundary caught:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-12 bg-[#171a21] text-[#66c0f4] rounded-lg border border-red-900/50">
          <AlertTriangle size={48} className="mb-4 text-red-500" />
          <h2 className="text-xl font-bold mb-2">Произошла ошибка интерфейса</h2>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#2a475e] hover:bg-[#3d6c8d] text-white rounded transition-colors"
          >
            Перезагрузить страницу
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
