import Logo from "./logo.png";
import "./index.css";
import { SearchIcon } from "@heroicons/react/solid";

function App() {
  return (
    <div>
      <header className="flex bg-reddit_dark p-2">
        <div className="mx-4">
          <img src={Logo} alt="/" className=" w-8 h-8 " />
        </div>
        <form action="" className="bg-gray-800 p-1 flex">
          <SearchIcon className="bg-gray-800 h-8" />
          <input type="text" className="bg-gray-800 h-8 text-white"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
