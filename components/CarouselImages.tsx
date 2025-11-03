import React from 'react';

// FIX: Changed 'aria-hidden' to a boolean `true` to match the expected type `Booleanish`.
const imageProps = {
  className: "w-full h-auto max-w-sm text-[var(--color-text-secondary)]",
  'aria-hidden': true,
  focusable: false
};

export const SolutionCarouselImage1: React.FC = () => (
    <svg {...imageProps} viewBox="0 0 300 200">
        <defs>
            <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-primary-dark)" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="20" fill="url(#cg1)" opacity="0.3" />
        <rect x="30" y="130" width="40" height="40" rx="5" fill="url(#cg1)" opacity="0.3" />
        <path d="M150 30 L170 70 L130 70 Z" fill="url(#cg1)" opacity="0.3" />
        <path d="M75 55 c 40 10, 40 80, 0 90" stroke="var(--color-border)" strokeWidth="2" fill="none"/>
        <path d="M70 140 c 40 -10, 40 -80, 0 -90" stroke="var(--color-border)" strokeWidth="2" fill="none"/>
        <path d="M150 75 c 0 40, -40 40, -40 80" stroke="var(--color-border)" strokeWidth="2" fill="none"/>

        <rect x="200" y="75" width="80" height="50" rx="10" stroke="url(#cg1)" strokeWidth="3" fill="var(--color-surface)" />
        <line x1="210" y1="90" x2="270" y2="90" stroke="var(--color-primary)" strokeWidth="2" />
        <line x1="210" y1="105" x2="250" y2="105" stroke="var(--color-primary)" strokeWidth="2" />
        <text x="180" y="60" fontSize="12" fill="var(--color-primary)">Data Harmonization</text>
    </svg>
);

export const SolutionCarouselImage2: React.FC = () => (
    <svg {...imageProps} viewBox="0 0 300 200">
        <path d="M50 150 Q 150 50 250 150" fill="none" stroke="var(--color-border)" strokeWidth="2" />
        <path d="M50 150 Q 150 70 250 150" fill="none" stroke="var(--color-border)" strokeWidth="2" />
        <path d="M50 150 Q 150 90 250 150" fill="none" stroke="var(--color-border)" strokeWidth="2" />
        <circle cx="150" cy="100" r="30" stroke="var(--color-primary)" strokeWidth="3" fill="var(--color-surface)" />
        <path d="M140 100 L 160 100 M 150 90 L 150 110" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
        <g transform="translate(145, 95)" opacity="0.7">
            <path d="M0 0 L 10 0 L 5 10 Z" fill="var(--color-primary-dark)" />
        </g>
        <text x="110" y="50" fontSize="12" fill="var(--color-primary)">ML-Powered Core</text>
    </svg>
);

export const SolutionCarouselImage3: React.FC = () => (
    <svg {...imageProps} viewBox="0 0 300 200">
        <rect x="100" y="30" width="100" height="140" rx="10" stroke="var(--color-primary)" strokeWidth="3" fill="var(--color-surface)"/>
        <path d="M50 100 c 40 -20, 40 20, 0 0 Z" fill="var(--color-primary)" opacity="0.5" />
        <path d="M50 100 h 50" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
        <text x="20" y="80" fontSize="12" fill="var(--color-primary)">Voice & TTS</text>
        <circle cx="150" cy="80" r="20" fill="var(--color-primary)" />
        <path d="M145 75 l 10 10 m -10 0 l 10 -10" stroke="var(--color-bg)" strokeWidth="3" fill="none" />
        <text x="115" y="120" fontSize="12" fill="var(--color-text-secondary)">Simple Icons</text>
    </svg>
);

export const SolutionCarouselImage4: React.FC = () => (
    <svg {...imageProps} viewBox="0 0 300 200">
        <path d="M50 50 L 150 150 L 250 50" stroke="var(--color-border)" strokeWidth="3" fill="none" />
        <circle cx="50" cy="50" r="15" fill="var(--color-text-secondary)" opacity="0.8" />
        <text x="35" y="90" fontSize="12" fill="var(--color-text-secondary)">Farmer</text>
        <circle cx="250" cy="50" r="15" fill="var(--color-text-secondary)" opacity="0.8" />
        <text x="230" y="90" fontSize="12" fill="var(--color-text-secondary)">Platform</text>
        <circle cx="150" cy="150" r="25" fill="var(--color-primary)" />
        <path d="M140 150 l 5 5 l 10 -10" stroke="var(--color-bg)" strokeWidth="3" fill="none" />
        <text x="100" y="190" fontSize="12" fill="var(--color-primary)">Shared Success</text>
    </svg>
);