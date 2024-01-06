import {ParsedTransactionWithMeta, TransactionSignature} from "@solana/web3.js";
import {useState} from "react";
import {findTransactionBySignature} from "../transaction/transactionProvider.ts";
import {Nullable} from "../shared/nullable.ts";

type SearchBarState = TransactionSignature;

export const useSearchBar = () => {
  const initialState = '';
  const [transactionSignature, setTransactionSignature] = useState<SearchBarState>(initialState);

  const updateInputValue = (value: SearchBarState) => {
    setTransactionSignature(value);
  }

  const searchTransaction = async (): Promise<Nullable<ParsedTransactionWithMeta>> => {
    return await findTransactionBySignature(transactionSignature);
  };

  return {
    transactionSignature,
    updateInputValue,
    searchTransaction
  };
};
