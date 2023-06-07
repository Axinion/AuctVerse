import { Link } from 'react-router-dom';
import { connectWallet } from '../services/blockchain';
import { truncate, useGlobalState } from '../store';

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount');
  return (
    <nav className="flex flex-row items-center justify-between w-4/5 py-4 mx-auto md:justify-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/" className="text-white">
          <span className="px-2 py-1 text-3xl italic font-bold">AuctVerse</span>
        </Link>
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
      hidden list-none flex-row justify-end 
      items-center flex-initial"
      >
        <Link to="/" className="mx-4 cursor-pointer">
          Market
        </Link>
        <Link to="/collections" className="mx-4 cursor-pointer">
          Collection
        </Link>
      </ul>

      {connectedAccount ? (
        <button className="p-2 text-xs text-white rounded-full shadow-xl cursor-pointer bg-violet-500 shadow-black hover:bg-violet-700 md:text-xs sm:text-base">
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="p-2 text-xs text-white rounded-full shadow-xl cursor-pointer bg-violet-500 shadow-black hover:bg-violet-700 md:text-xs sm:text-base"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};
export default Header;
