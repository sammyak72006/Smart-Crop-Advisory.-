import React, { useEffect } from 'react';
import { CloseIcon } from './Infographics';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  infographic?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, infographic }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-6 border-b border-[var(--color-border)] flex-shrink-0">
          <h2 id="modal-title" className="text-2xl font-bold text-[var(--color-primary)]">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </header>
        <main className="p-8 overflow-y-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {infographic && (
              <div className="flex items-center justify-center p-4 bg-black/20 rounded-lg border border-[var(--color-border)] opacity-0 animate-slide-fade-in">
                {infographic}
              </div>
            )}
            <div className={`text-[var(--color-text-secondary)] leading-relaxed text-lg ${!infographic ? 'lg:col-span-2' : ''}`}>
              {children}
            </div>
          </div>
        </main>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pop-in {
            from { transform: scale(0.95) translateY(10px); opacity: 0; }
            to { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes slide-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-fade-in { animation: slide-fade-in 0.5s ease-out 0.2s forwards; }
      `}</style>
    </div>
  );
};