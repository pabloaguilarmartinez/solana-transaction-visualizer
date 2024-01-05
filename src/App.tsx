import searchIcon from './assets/search.svg';
import copyIcon from './assets/copy.svg';
import {
  clusterApiUrl,
  Connection, LAMPORTS_PER_SOL,
  ParsedTransactionWithMeta,
  TransactionSignature
} from '@solana/web3.js';
import {ChangeEvent, useState} from 'react';
import copy from 'clipboard-copy';

const connection = new Connection(clusterApiUrl('devnet'));
type TransactionDetails = {
  signature: TransactionSignature;
  fee: number;
  slot: number;
  blockTime?: number | null;
  previousBlockHash: string;
};

function App() {
  const [transactionSignature, setTransactionSignature] = useState<TransactionSignature>('');
  const [transactionDetails, setTransactionDetails] = useState<TransactionDetails | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTransactionSignature(event.target.value);
  };
  const handleClick = async () => {
    try {
      if (transactionSignature.trim() === '') return;
      const parsedTransaction: ParsedTransactionWithMeta | null = await connection.getParsedTransaction(transactionSignature);
      console.table(parsedTransaction);
      if (parsedTransaction) {
        setTransactionDetails({
          signature: parsedTransaction.transaction.signatures[0],
          fee: parsedTransaction.meta ? parsedTransaction.meta.fee / LAMPORTS_PER_SOL : 0,
          slot: parsedTransaction.slot,
          blockTime: parsedTransaction.blockTime,
          previousBlockHash: parsedTransaction.transaction.message.recentBlockhash
        });
      }
      setTransactionSignature('');
    } catch (error) {
      console.log(`There is an error fetching transaction: ${error}`)
    }
  };
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-black">
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between bg-gray-800 p-4">
        <h1 className="text-2xl font-bold text-white">SOLANA TX VISUALIZER</h1>
      </header>
      <main className="flex w-full max-w-3xl flex-col items-center space-y-10">
        <h2 className="text-4xl font-bold text-white drop-shadow-md">
          A friendly
          <span
            className="bg-clip-text text-transparent bg-gradient-to-br from-violet-500 to-[#dd2476]"
          > Solana </span>
          explorer.
        </h2>
        <div className="flex w-full flex-col items-center space-y-4">
          <div className="flex w-full items-center space-x-2 rounded-md bg-white p-2 shadow-md">
            <input
              placeholder="Input a Solana transaction signature"
              className="flex-grow outline-none"
              type="text"
              onChange={handleInputChange}
              value={transactionSignature}
            />
            <img src={searchIcon} alt="search-icon"/>
          </div>
          <button
            className="w-full bg-gray-700 px-6 py-2 text-white hover:bg-white hover:text-black rounded"
            onClick={handleClick}
          >
            EXPLORE
          </button>
        </div>
        {transactionDetails &&
          <div className="flex flex-col">
            <h1 className="text-xl !font-bold font-sans text-white">Transaction Details</h1>
            <div className="flex flex-row gap-2 items-center min-w-full">
              <span className="text-sm text-white font-sans break-all truncate">{transactionDetails.signature}</span>
              <button onClick={() => {
                copy(transactionDetails?.signature)
              }}>
                <img src={copyIcon} alt="Copy signature"/>
              </button>
            </div>
            <div className="flex justify-between w-full mt-2 bg-white rounded-lg shadow-lg p-4 gap-4">
              <div>
                <h3 className="font-bold">Network Fee</h3>
                <p className="text-gray-500">Cost for processing this transaction.</p>
              </div>
              <p className="font-mono text-gray-800">{transactionDetails.fee} SOL</p>
            </div>
            <div className="flex justify-between w-full mt-2 bg-white rounded-lg shadow-lg p-4 gap-4">
              <div>
                <h3 className="font-bold">Slot</h3>
                <p className="text-gray-500">The slot this transaction happened on.</p>
              </div>
              <p className="font-mono text-gray-800">{transactionDetails.slot}</p>
            </div>
            <div className="flex justify-between w-full mt-2 bg-white rounded-lg shadow-lg p-4 gap-4">
              <div>
                <h3 className="font-bold">Timestamp</h3>
                <p className="text-gray-500">The date the transaction was processed.</p>
              </div>
              <p
                className="font-mono text-gray-800">{transactionDetails.blockTime ? new Date(transactionDetails.blockTime * 1000).toUTCString() : ''}</p>
            </div>
            <div className="flex justify-between w-full mt-2 bg-white rounded-lg shadow-lg p-4 gap-4">
              <div>
                <h3 className="font-bold">Previous Block Hash</h3>
                <p className="text-gray-500">The date the transaction was processed.</p>
              </div>
              <p className="font-mono text-gray-800">{transactionDetails.previousBlockHash}</p>
            </div>
          </div>
        }
        <div className="flex flex-col w-full mt-2 bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-lg text-center">TRANSACTION_NOT_FOUND</h3>
        </div>
      </main>
    </div>
  );
}

export default App;


