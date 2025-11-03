import React, { useState, useEffect } from 'react';

interface CardProps {
  image: React.ReactNode;
  title: string;
  description: string;
  index: number;
  onReadMore: () => void;
}

export const Card: React.FC<CardProps> = ({ image, title, description, index, onReadMore }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Staggered animation for initial load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100); 
    return () => clearTimeout(timer);
  }, [index]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleReadMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from closing when button is clicked
    onReadMore();
  };


  return (
    <div 
      className={`
        bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] 
        flex flex-col
        transform transition-all duration-300 ease-out group
        hover:border-[var(--color-primary)] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,220,130,0.15)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      onClick={handleToggle}
      aria-expanded={isExpanded}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
    >
      <div className="w-full h-40 bg-black/20 rounded-t-xl flex items-center justify-center p-4 border-b border-[var(--color-border)]">
        {image}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] flex-1 mb-4 cursor-pointer">{title}</h3>
        
        <div 
          className={`grid transition-all duration-500 ease-in-out`}
          style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
             <div className={`pt-4 mt-4 border-t border-[var(--color-border)] ${isExpanded ? 'animate-reveal-bounce' : 'opacity-0'}`}>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm mb-4">
                {description}
              </p>
              <button
                onClick={handleReadMoreClick}
                className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
              >
                Read More &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};