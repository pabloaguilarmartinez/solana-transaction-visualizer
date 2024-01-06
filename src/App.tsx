import {Header} from './header/Header.tsx';
import {TransactionSearcher} from './transaction/TransactionSearcher.tsx';

function App() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Header />
      <TransactionSearcher />
    </div>
  );
}

export default App;
