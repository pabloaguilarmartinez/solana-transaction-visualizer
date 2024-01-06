import copy from 'clipboard-copy';
import copyIcon from '../assets/copy.svg';
import {Transaction} from './transaction.ts';
import React from 'react';
import {TransactionDetail} from "./TransactionDetail.tsx";

type TransactionDetailsProps = {
  transaction: Transaction;
};

export const TransactionDetails: React.FC<TransactionDetailsProps> = ({transaction}) => {
  const transactionDetails = transaction.details();
  return (
    <div className="flex flex-col">
      <h1 className="text-xl !font-bold font-sans text-white">Transaction Details</h1>
      <div className="flex flex-row gap-2 items-center min-w-full">
        <span className="text-sm text-white font-sans break-all truncate">{transaction.signature}</span>
        <button onClick={() => {
          copy(transaction.signature)
        }}>
          <img src={copyIcon} alt="Copy signature"/>
        </button>
      </div>
      {
        transactionDetails.map((detail, index) => {
          return (
            <TransactionDetail key={index} name={detail.name} description={detail.description} value={detail.value}/>
          );
        })
      }
    </div>
  );
};
