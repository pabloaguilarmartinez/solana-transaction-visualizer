import {clusterApiUrl, Connection, ParsedTransactionWithMeta, TransactionSignature} from '@solana/web3.js';
import {Nullable} from '../shared/nullable.ts';

const connection = new Connection(clusterApiUrl('devnet'));

export const findTransactionBySignature =
  async (signature: TransactionSignature): Promise<Nullable<ParsedTransactionWithMeta>> => {
    try {
      return await connection.getParsedTransaction(signature);
    } catch (error) {
      console.log(`There is an error fetching transaction: ${error}`);
    }
  };
