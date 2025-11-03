import React from 'react';

// FIX: Changed 'aria-hidden' to a boolean `true` to match the expected type `Booleanish`.
const iconProps = {
  className: "w-7 h-7",
  strokeWidth: "1.5",
  'aria-hidden': true,
  focusable: false,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

export const ChevronLeftIcon: React.FC = () => (
  <svg {...iconProps} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon: React.FC = () => (
  <svg {...iconProps} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);