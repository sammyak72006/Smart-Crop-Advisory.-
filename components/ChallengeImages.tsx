import React from 'react';

const imageProps = {
  className: "w-full h-auto max-w-[120px] text-[var(--color-text-secondary)]",
  'aria-hidden': true,
  focusable: false
};

export const ChallengeImage1: React.FC = () => (
    <svg {...imageProps} viewBox="0 0 100 80">
        <defs>
            <linearGradient id="g-img1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-primary-dark)" />
            </linearGradient>
        </defs>
        <rect x="5" y="20" width="25" height="25" rx="3" fill="url(#g-img1)" opacity="0.5" />
        <rect x="35" y="5" width="25" height="25" rx="3" fill="url(#g-img1)" opacity="0.5" />
        <rect x="65" y="35" width="25" height="25" rx="3" fill="url(#g-img1)" opacity="0.5" />
        <rect x="20" y="50" width="25" height="25" rx="3" fill="url(#g-img1)" opacity="0.5" />
        
        <path d="M25 35 L 45 25" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M55 25 L 75 45" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M35 60 L 50 20" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
);

export const ChallengeImage2: React.FC = () => (
    <svg {...imageProps} viewBox="0 0 100 80">
        <path d="M10 70 Q 50 10, 90 70" fill="none" stroke="var(--color-border)" strokeWidth="2" />
        <circle cx="50" cy="40" r="15" fill="none" stroke="var(--color-primary)" strokeWidth="2"/>
        <line x1="50" y1="30" x2="50" y2="20" stroke="var(--color-primary)" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="50" y2="60" stroke="var(--color-primary)" strokeWidth="1.5" />
        <line x1="40" y1="40" x2="30" y2="40" stroke="var(--color-primary)" strokeWidth="1.5" />
        <line x1="60" y1="40" x2="70" y2="40" stroke="var(--color-primary)" strokeWidth="1.5" />
        <circle cx="50" cy="20" r="2" fill="var(--color-primary)" />
        <circle cx="50" cy="60" r="2" fill="var(--color-primary)" />
        <circle cx="30" cy="40" r="2" fill="var(--color-primary)" />
        <circle cx="70" cy="40" r="2" fill="var(--color-primary)" />
    </svg>
);

export const ChallengeImage3: React.FC = () => (
    <svg {...imageProps} viewBox="0 0 100 80">
        <rect x="20" y="10" width="60" height="60" rx="5" fill="none" stroke="var(--color-border)" strokeWidth="2" />
        <line x1="30" y1="25" x2="70" y2="25" stroke="var(--color-border)" strokeWidth="1.5" />
        <line x1="30" y1="35" x2="60" y2="35" stroke="var(--color-border)" strokeWidth="1.5" />
        <line x1="30" y1="45" x2="70" y2="45" stroke="var(--color-border)" strokeWidth="1.5" />
        <path d="M85 40 L 95 35 M 85 40 L 95 45" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
        <path d="M15 40 L 5 35 M 15 40 L 5 45" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
        <line x1="15" y1="40" x2="85" y2="40" stroke="var(--color-primary)" strokeWidth="2" />
    </svg>
);

export const ChallengeImage4: React.FC = () => (
    <svg {...imageProps} viewBox="0 0 100 80">
        <path d="M 20 60 L 50 20 L 80 60 Z" fill="none" stroke="var(--color-border)" strokeWidth="2" />
        <circle cx="50" cy="20" r="8" fill="var(--color-primary)" />
        <circle cx="20" cy="60" r="8" fill="var(--color-text-secondary)" />
        <circle cx="80" cy="60" r="8" fill="var(--color-text-secondary)" />
        <path d="M50 28 V 50" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="2 2"/>
        <path d="M30 60 H 70" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="2 2"/>
    </svg>
);
