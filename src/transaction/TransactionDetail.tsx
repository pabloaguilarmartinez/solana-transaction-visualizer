import React from 'react';
import {Nullable} from '../shared/nullable.ts';

type TransactionDetailProps = {
  name: string;
  description: string;
  value: string | Nullable<number>;
};

export const TransactionDetail: React.FC<TransactionDetailProps> = ({name, description, value}) => {
  return (
    <div className="flex justify-between w-full mt-2 bg-white rounded-lg shadow-lg p-4 gap-4">
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <p className="font-mono text-gray-800">{value}</p>
    </div>
  );
};
