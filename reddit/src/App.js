import Logo from "./logo.png";
import "./index.css";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";

function App() {
  return (
    <div>
      <header className="flex bg-reddit_dark p-2">
        <div className="mx-4">
          <img src={Logo} alt="/" className=" w-8 h-8 " />
        </div>
        <form
          action=""
          className="bg-reddit_dark-brighter px-3 flex rounded-md border-gray-800"
        >
          <SearchIcon className="text-gray-400 h-6 w-6 mt-1" />
          <input
            type="text"
            className="bg-reddit_dark-brighter text-sm pl-1 pt-0 block focus:outline-none text-white"
            placeholder="Search"
          ></input>
        </form>
        <BellIcon className="text-gray-400 h-6 w-6 mt-1"/>
      </header>
    </div>
  );
}

export default App;
