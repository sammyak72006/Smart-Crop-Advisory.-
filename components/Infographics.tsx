import React from 'react';

// FIX: Changed 'aria-hidden' to a boolean `true` to match the expected type `Booleanish`.
const infographicProps = {
  className: "w-full h-auto max-w-md mx-auto text-[var(--color-text-secondary)]",
  'aria-hidden': true,
  focusable: false
};

// FIX: Used boolean props for `aria-hidden` and `focusable` for type safety.
export const CloseIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden={true} focusable={false}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const DataFragmentationInfographic: React.FC = () => (
  <svg {...infographicProps} viewBox="0 0 300 200">
    <defs>
      <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-primary-dark)" />
        <stop offset="100%" stopColor="var(--color-primary)" />
      </linearGradient>
    </defs>
    {/* Sources */}
    <g opacity="0.7">
      <circle cx="50" cy="50" r="20" fill="url(#g1)" />
      <text x="80" y="55" fontSize="12" fill="currentColor">Weather API</text>
    </g>
    <g opacity="0.7">
      <rect x="30" y="130" width="40" height="40" rx="5" fill="url(#g1)" />
      <text x="80" y="155" fontSize="12" fill="currentColor">Satellite</text>
    </g>
    <g opacity="0.7">
      <path d="M150 30 L170 70 L130 70 Z" fill="url(#g1)" />
      <text x="180" y="55" fontSize="12" fill="currentColor">Sensors</text>
    </g>
    
    {/* Fragmented Lines */}
    <path d="M70 60 C 120 80, 150 150, 200 170" stroke="var(--color-border)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
    <path d="M65 130 C 100 110, 180 110, 220 80" stroke="var(--color-border)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
    <path d="M150 75 C 170 90, 180 140, 240 140" stroke="var(--color-border)" strokeWidth="2" fill="none" strokeDasharray="4 4" />

    <text x="150" y="190" textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)" opacity="0.8">Incompatible Data Streams</text>
  </svg>
);

export const PredictiveDiagnosticsInfographic: React.FC = () => (
    <svg {...infographicProps} viewBox="0 0 300 200">
       <defs>
        <filter id="glow-inf" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" in="SourceGraphic" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Land Plot */}
      <path d="M20 180 Q 150 100 280 180 Z" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
      <text x="110" y="170" fontSize="12" fill="currentColor">Farm Plot</text>
      
      {/* Generic approach */}
      <rect x="50" y="80" width="200" height="10" rx="5" fill="var(--color-border)" />
      <text x="110" y="70" fontSize="12" fill="var(--color-text-secondary)" opacity="0.8">Uniform Application</text>
      
      {/* Predictive drops */}
      <g transform="translate(80, 40)">
        <path d="M0 0 C 0 10, 10 10, 10 0 C 5 -10, 5 -10, 0 0 Z" fill="var(--color-primary)" filter="url(#glow-inf)" />
      </g>
      <g transform="translate(145, 20)">
        <path d="M0 0 C 0 10, 10 10, 10 0 C 5 -10, 5 -10, 0 0 Z" fill="var(--color-primary)" filter="url(#glow-inf)" />
      </g>
      <g transform="translate(210, 50)">
        <path d="M0 0 C 0 10, 10 10, 10 0 C 5 -10, 5 -10, 0 0 Z" fill="var(--color-primary)" filter="url(#glow-inf)" />
      </g>
      <text x="85" y="115" fontSize="12" fill="var(--color-primary)" opacity="0.9">Hyper-Granular Prescription</text>
    </svg>
);

export const UsabilityGapInfographic: React.FC = () => (
    <svg {...infographicProps} viewBox="0 0 300 200">
      {/* Complex Interface */}
      <rect x="30" y="40" width="100" height="120" rx="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
      <rect x="40" y="55" width="80" height="8" rx="2" fill="var(--color-border)" />
      <rect x="40" y="75" width="60" height="8" rx="2" fill="var(--color-border)" />
      <rect x="40" y="95" width="80" height="8" rx="2" fill="var(--color-border)" />
      <rect x="40" y="115" width="50" height="8" rx="2" fill="var(--color-border)" />
      <text x="40" y="180" textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)" opacity="0.8">Complex UI</text>
      
      {/* Arrow */}
      <path d="M150 100 L180 100" stroke="var(--color-primary)" strokeWidth="2" />
      <path d="M175 95 L180 100 L175 105" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
      
      {/* Simple Interface */}
      <rect x="200" y="40" width="100" height="120" rx="10" fill="var(--color-surface)" stroke="var(--color-primary)" strokeWidth="2" />
      <circle cx="250" cy="80" r="15" fill="var(--color-primary)" />
      <path d="M225 130 C 250 110, 275 130, 275 130" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
      <text x="250" y="180" textAnchor="middle" fontSize="12" fill="var(--color-primary)">Farmer-Centric</text>
    </svg>
);

export const TrustRiskInfographic: React.FC = () => (
    <svg {...infographicProps} viewBox="0 0 300 200">
        {/* Scales */}
        <line x1="50" y1="100" x2="250" y2="100" stroke="var(--color-border)" strokeWidth="2" />
        <line x1="150" y1="100" x2="150" y2="120" stroke="var(--color-border)" strokeWidth="2" />
        <path d="M130 120 H 170 L 150 140 Z" fill="var(--color-border)" />

        {/* Farmer Risk */}
        <rect x="60" y="60" width="60" height="40" fill="var(--color-text-secondary)" opacity="0.5" />
        <text x="65" y="90" fontSize="12" fill="var(--color-text-primary)">Farmer Risk</text>
        
        {/* Tech Low Risk */}
        <rect x="180" y="80" width="60" height="20" fill="var(--color-surface)" />
        <text x="185" y="95" fontSize="12" fill="var(--color-text-secondary)">Tech Provider</text>

        {/* Aligned Model */}
        <path d="M50 40 C 150 0, 150 0, 250 40" stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeDasharray="5 5" />
        <circle cx="150" cy="40" r="15" fill="var(--color-primary)" />
        <path d="M145 40 L150 45 L155 35" stroke="var(--color-bg)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="150" y="70" textAnchor="middle" fontSize="12" fill="var(--color-primary)">Outcome-Aligned Success</text>
    </svg>
);

export const DataHarmonizationInfographic: React.FC = () => (
     <svg {...infographicProps} viewBox="0 0 300 200">
      <circle cx="50" cy="50" r="10" fill="var(--color-primary)" opacity="0.6"/>
      <rect x="40" y="90" width="20" height="20" fill="var(--color-primary)" opacity="0.6"/>
      <path d="M50 130 L60 150 L40 150 Z" fill="var(--color-primary)" opacity="0.6" />

      <path d="M70 50 H 130" stroke="var(--color-border)" strokeWidth="2" fill="none" />
      <path d="M70 100 H 130" stroke="var(--color-border)" strokeWidth="2" fill="none" />
      <path d="M70 140 H 130" stroke="var(--color-border)" strokeWidth="2" fill="none" />

      <path d="M130 50 C 160 70, 160 130, 130 150" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
      
      <rect x="200" y="75" width="80" height="50" rx="5" fill="var(--color-primary)" />
      <text x="190" y="60" textAnchor="middle" fontSize="12" fill="var(--color-primary)">Unified Feed</text>
     </svg>
);

export const MLModelInfographic: React.FC = () => (
     <svg {...infographicProps} viewBox="0 0 300 200">
      <rect x="30" y="75" width="80" height="50" rx="5" fill="var(--color-primary)" />
      <text x="35" y="105" fontSize="12" fill="var(--color-bg)">Unified Data</text>
      
      <path d="M110 100 H 140 L 135 95 M 140 100 L 135 105" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
      
      <circle cx="200" cy="100" r="40" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="5 5" />
      <circle cx="200" cy="100" r="10" fill="var(--color-primary)" />
      <text x="200" y="50" textAnchor="middle" fontSize="12" fill="var(--color-primary)">ML Core</text>

      <path d="M240 100 H 270 L 265 95 M 270 100 L 265 105" stroke="var(--color-text-secondary)" strokeWidth="2" fill="none" />
      <text x="260" y="125" fontSize="12" fill="var(--color-text-secondary)">Insights</text>
     </svg>
);

export const ZeroLiteracyInterfaceInfographic: React.FC = () => (
     <svg {...infographicProps} viewBox="0 0 300 200">
        <rect x="100" y="30" width="100" height="140" rx="10" stroke="var(--color-primary)" strokeWidth="2" fill="var(--color-surface)"/>

        <circle cx="150" cy="70" r="15" fill="var(--color-primary)"/>
        <path d="M145 70 l5 5 l5 -10" stroke="var(--color-bg)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="150" y="105" textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">Large Icons</text>

        <path d="M125 130 C 150 110, 175 130, 175 130" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
        <text x="150" y="155" textAnchor="middle" fontSize="12" fill="var(--color-text-secondary)">Voice Guidance</text>
     </svg>
);

export const SuccessFeeInfographic: React.FC = () => (
    <svg {...infographicProps} viewBox="0 0 300 200">
      <line x1="40" y1="170" x2="260" y2="170" stroke="var(--color-border)" strokeWidth="2" />
      
      {/* Before */}
      <rect x="80" y="100" width="40" height="70" fill="var(--color-text-secondary)" opacity="0.5" />
      <text x="80" y="185" fontSize="12" fill="var(--color-text-secondary)">Before</text>
      
      {/* After */}
      <rect x="180" y="50" width="40" height="120" fill="var(--color-primary)" />
      <text x="180" y="185" fontSize="12" fill="var(--color-primary)">After</text>
      
      {/* Gain */}
      <rect x="180" y="50" width="40" height="50" fill="var(--color-primary-dark)" opacity="0.7"/>
      <line x1="220" y1="75" x2="240" y2="75" stroke="var(--color-primary-dark)" strokeWidth="2" />
      <text x="245" y="80" fontSize="12" fill="var(--color-primary-dark)">Farmer's Net Gain</text>

       {/* Success Fee */}
      <rect x="180" y="50" width="40" height="15" fill="var(--color-bg)" opacity="0.8"/>
      <line x1="220" y1="57.5" x2="240" y2="57.5" stroke="var(--color-text-primary)" strokeWidth="2" />
      <text x="245" y="62.5" fontSize="12" fill="var(--color-text-primary)">Success Fee</text>
    </svg>
);