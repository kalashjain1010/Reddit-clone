import Logo from "./logo.png";
import "./index.css";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import {HomeIcon} from "@heroicons/react/solid";

function App() {
  return (
    <div>
      <header className=" bg-reddit_dark p-2">
        <div className="mx-4 flex">
          <img src={Logo} alt="/" className=" w-8 h-8 mr-4" />

          
          <button className="mr-5 flex text-white">
            <HomeIcon className="text-white h-6 w-6 mt-1" />
            <div className="mt-1">Home</div>
            <ChevronDownIcon className="text-gray-400 h-6 w-6 mt-1 ml-1" />
          </button>
          <form
            action=""
            className="bg-reddit_dark-brighter ml-4 px-3 flex rounded-md border-gray-800"
          >
            <SearchIcon className="text-gray-400 h-6 w-6 mt-1" />
            <input
              type="text"
              className="bg-reddit_dark-brighter text-sm pl-1 pt-0 block focus:outline-none text-white"
              placeholder="Search"
            ></input>
          </form>

          <button className="px-2 py-1">
            <ChatIcon className="text-gray-400 h-6 w-6 mx-2" />
          </button>
          <button className="px-2 py-1">
            <BellIcon className="text-gray-400 h-6 w-6 mx-2" />
          </button>
          <button className="px-2 py-1">
            <PlusIcon className="text-gray-400 h-6 w-6 mx-2" />
          </button>

          <button className=" ml-4 py-1 flex">
            <UserIcon className="text-gray-400 h-6 w-6 " />
            <ChevronDownIcon className="text-gray-400 h-6 w-6 " />
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
