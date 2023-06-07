import { toast } from 'react-toastify';
import { BsArrowRightShort } from 'react-icons/bs';
import picture0 from '../assets/images/picture0.png';
import { setGlobalState, useGlobalState } from '../store';
import { loginWithCometChat, signUpWithCometChat } from '../services/chat';

const Hero = () => {
  return (
    <div className="flex flex-col items-start w-4/5 mx-auto md:flex-row mt-11">
      <Banner />
      <Bidder />
    </div>
  );
};

const Bidder = () => (
  <div className="w-full overflow-hidden font-sans text-white bg-gray-800 rounded-md shadow-xl shadow-black md:w-3/5 lg:w-2/5 md:mt-0">
    <img
      src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="nft"
      className="object-cover w-full h-60"
    />
    <div
      className="shadow-lg shadow-gray-400 border-4 border-[#ffffff36] 
      flex flex-row justify-between items-center px-3"
    >
      <div className="p-2">
        Current Bid
        <div className="font-bold text-center">2.231 ETH</div>
      </div>
      <div className="p-2">
        Auction End
        <div className="font-bold text-center">20:10</div>
      </div>
    </div>
    <div
      className="bg-violet-500 w-full h-[40px] p-2 text-center 
    font-bold font-mono "
    >
      Place a Bid
    </div>
  </div>
);

const Banner = () => {
  const [currentUser] = useGlobalState('currentUser');

  const handleLogin = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await loginWithCometChat()
          .then((user) => {
            setGlobalState('currentUser', user);
            console.log(user);
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      }),
      {
        pending: 'Signing in...',
        success: 'Logged in successful 👌',
        error: 'Error, are you signed up? 🤯',
      }
    );
  };

  const handleSignup = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await signUpWithCometChat()
          .then((user) => {
            console.log(user);
            resolve(user);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      }),
      {
        pending: 'Signing up...',
        success: 'Signned up successful 👌',
        error: 'Error, maybe you should login instead? 🤯',
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-between w-full mx-auto md:flex-row">
      <div className="">
        <h1 className="py-1 text-5xl font-semibold text-white">
          Discover, Collect
        </h1>
        <h1 className="py-1 mb-5 text-4xl font-semibold text-white">
          and Sell
          <span className="px-1 text-violet-500">Artworks</span>.
        </h1>
        <p className="font-light text-white">
          More than 100+ Artworks available for collect
        </p>
        <p className="font-light text-white mb-11">
          & sell, get your Artwork now.
        </p>
        <div className="flex mb-4 text-5xl flew-row">
          {!currentUser ? (
            <div className="flex items-center justify-start space-x-2">
              <button
                className="flex flex-row items-center justify-center w-auto p-2 text-sm text-white rounded-sm shadow-md bg-violet-500 shadow-gray-700"
                onClick={handleLogin}
              >
                Login Now
              </button>
              <button
                className="text-white text-sm p-2 flex flex-row shadow-md shadow-gray-700
                justify-center items-center bg-[#ffffff36] rounded-sm w-auto"
                onClick={handleSignup}
              >
                Signup Now
              </button>
            </div>
          ) : (
            <button
              className="flex flex-row items-center justify-center w-auto p-2 text-sm text-white rounded-sm shadow-md bg-violet-500 shadow-gray-700"
              onClick={() => setGlobalState('boxModal', 'scale-100')}
            >
              Create Artwork
              <BsArrowRightShort className="font-bold animate-pulse" />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between w-3/4 mt-5">
          <div>
            <p className="font-bold text-white">100k+</p>
            <small className="text-gray-300">Auction</small>
          </div>
          <div>
            <p className="font-bold text-white">210k+</p>
            <small className="text-gray-300">Rare</small>
          </div>
          <div>
            <p className="font-bold text-white">120k+</p>
            <small className="text-gray-300">Artist</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
