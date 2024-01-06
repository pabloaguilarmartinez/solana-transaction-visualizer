import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between bg-gray-800 p-4">
      <h1 className="text-2xl font-bold text-white">SOLANA TX VISUALIZER</h1>
    </header>
  );
};
