import searchIcon from './assets/search.svg';

function App() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-black">
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between bg-gray-800 p-4">
        <h1 className="text-2xl font-bold text-white">SOLANA TX VISUALIZER</h1>
      </header>
      <main className="flex w-full max-w-2xl flex-col items-center space-y-8">
        <h2 className="text-4xl font-bold text-white drop-shadow-md">
          A friendly
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-violet-500 to-[#dd2476]"> Solana </span>
          explorer.
        </h2>
        <div className="flex w-full flex-col items-center space-y-4">
          <div className="flex w-full items-center space-x-2 rounded-md bg-white p-2 shadow-md">
            <input placeholder="Input a Solana transaction signature" className="flex-grow outline-none" type="text"/>
            <img src={searchIcon} alt="search-icon"/>
          </div>
          <button className="w-full bg-gray-700 px-6 py-2 text-white hover:bg-white hover:text-black rounded">
            EXPLORE
          </button>
        </div>
        <div className="flex flex-col w-full mt-10 bg-white rounded-lg shadow-lg p-6 gap-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-lg">Transaction ID</h3>
              <p className="text-gray-500">Unique identifier for the transaction</p>
            </div>
            <p className="font-mono text-gray-800">3h4g5j6k7l8m9n0o</p>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-lg">Block Height</h3>
              <p className="text-gray-500">Height of the block containing the transaction</p>
            </div>
            <p className="font-mono text-gray-800">123456</p>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-lg">Timestamp</h3>
              <p className="text-gray-500">Time when the transaction was processed</p>
            </div>
            <p className="font-mono text-gray-800">2024-01-05 12:34:56</p>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10 bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-lg text-center">TRANSACTION_NOT_FOUND</h3>
        </div>
      </main>
    </div>
  );
}

export default App;


