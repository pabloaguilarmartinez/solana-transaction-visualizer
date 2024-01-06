import searchIcon from '../assets/search.svg';
import React, {ChangeEvent} from 'react';
import {TransactionSignature} from "@solana/web3.js";


type SearchBarProps = {
  inputValue: TransactionSignature;
  updateInputValue: (value: string) => void;
  searchTransaction:  () => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({inputValue, updateInputValue, searchTransaction}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateInputValue(event.target.value);
  };
  const handleClick = async () => {
    searchTransaction();
  };
  return (
    <>
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
            value={inputValue}
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
    </>
  );
};
