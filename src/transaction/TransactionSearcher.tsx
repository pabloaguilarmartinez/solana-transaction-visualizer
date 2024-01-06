import React, {useState} from 'react';
import {TransactionNotFound} from '../error/TransactionNotFound.tsx';
import {SearchBar} from '../searchbar/SearchBar.tsx';
import {TransactionDetails} from './TransactionDetails.tsx';
import {useSearchBar} from '../searchbar/useSearchBarState.ts';
import {Nullable} from '../shared/nullable.ts';
import {Transaction} from './transaction.ts';
import {Loading} from '../shared/Loading.tsx';

export const TransactionSearcher: React.FC = () => {
  const {
    transactionSignature,
    updateInputValue,
    searchTransaction
  } = useSearchBar();
  const [transaction, setTransaction] = useState<Nullable<Transaction>>(null);
  const [error, setError] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const handleSearchTransaction = async () => {
    if (transactionSignature.trim() === '') return;
    setSearching(true);
    setTransaction(null);
    setError(false);
    const parsedTransaction = await searchTransaction();
    if (!parsedTransaction) {
      setError(true);
    } else {
      const transaction = Transaction.fromParsedTransaction(parsedTransaction);
      setTransaction(transaction);
    }
    updateInputValue('');
    setSearching(false);
  };

  return (
    <main className="flex w-full max-w-3xl flex-col items-center space-y-10">
      {searching && <Loading />}
      {
        !searching &&
        <SearchBar
          inputValue={transactionSignature}
          updateInputValue={updateInputValue}
          searchTransaction={handleSearchTransaction}
        />
      }
      {transaction && <TransactionDetails transaction={transaction}/>}
      {error && <TransactionNotFound/>}
    </main>
  );
};
