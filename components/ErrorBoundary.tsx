import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // FIX: Removed 'public' access modifier. While valid TypeScript, it's not conventional for React class properties and may cause tooling conflicts.
  state: State = {
    hasError: false
  };

  // FIX: Removed 'public' access modifier.
  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // FIX: Removed 'public' access modifier.
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    // This is a good place to handle logging for API failures or other async errors
    console.error("Uncaught error:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  // FIX: Removed 'public' access modifier.
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] flex items-center justify-center p-4">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 max-w-lg text-center shadow-2xl animate-pop-in">
            <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Oops! Something went wrong.</h1>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We've encountered an unexpected issue. Our team has been notified. Please try refreshing the page to continue.
            </p>
            <button
              onClick={this.handleRefresh}
              className="bg-[var(--color-primary)] text-[var(--color-bg)] font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50"
            >
              Refresh Page
            </button>
          </div>
           <style>{`
            @keyframes pop-in {
                from { transform: scale(0.95) translateY(10px); opacity: 0; }
                to { transform: scale(1) translateY(0); opacity: 1; }
            }
            .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
