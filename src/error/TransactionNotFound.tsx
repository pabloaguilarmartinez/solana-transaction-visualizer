import React from 'react';

export const TransactionNotFound: React.FC = () => {
  return (
    <div className="flex flex-col w-full mt-2 bg-white rounded-lg shadow-lg p-6">
      <h3 className="font-bold text-lg text-center text-red-500">
        Transaction does not exist or signature is invalid.
      </h3>
    </div>
  );
};
