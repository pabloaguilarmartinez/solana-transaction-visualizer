import {LAMPORTS_PER_SOL, ParsedTransactionWithMeta, TransactionSignature} from "@solana/web3.js";
import {Nullable} from "../shared/nullable.ts";

export class Transaction {
  private constructor(
    readonly signature: TransactionSignature,
    readonly fee: number,
    readonly slot: number,
    readonly blockTime: Nullable<number>,
    readonly previousBlockHash: string,
    readonly computeUnitsConsumed: number
  ) {
  }

  static fromParsedTransaction(parsedTransaction: ParsedTransactionWithMeta): Transaction {
    return new Transaction(
      parsedTransaction.transaction.signatures[0],
      parsedTransaction.meta ? parsedTransaction.meta.fee / LAMPORTS_PER_SOL : 0,
      parsedTransaction.slot,
      parsedTransaction.blockTime,
      parsedTransaction.transaction.message.recentBlockhash,
      parsedTransaction.meta?.computeUnitsConsumed || 0
    );
  }

  details(): {name: string, description: string, value: string}[] {
    return [
      {

        name: 'Network Fee',
        description: 'Cost for processing this transaction.',
        value: `${this.fee} SOL`
      },
      {
        name: 'Slot',
        description: 'The slot this transaction happened on.',
        value: this.slot.toString()
      },
      {
        name: 'Timestamp',
        description: 'The date the transaction was processed.',
        value: this.blockTime ? new Date(this.blockTime * 1000).toUTCString() : ''
      },
      {
        name: 'Previous Block Hash',
        description: 'Recent blockhash.',
        value: this.previousBlockHash
      },
      {
        name: 'Compute Units Consumed',
        description: 'The compute units consumed after processing the transaction',
        value: this.computeUnitsConsumed.toString()
      }
    ];
  }
}
