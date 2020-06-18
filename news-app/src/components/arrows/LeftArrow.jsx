import React from 'react';

const LeftArrow = ({ color = '#000000', size = 32 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-left">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};

export default LeftArrow;