import { useState } from "react";
import search from "../assets/search.png";

interface SearchProps {
  name: string;
  setName: (newName: string) => void;
}
const searchIcons: Record<string, string> = {
  Search: search,
};

const Search: React.FC<SearchProps> = ({ name, setName }) => {
  const [inputValue, setInputValue] = useState("");
  const icon = searchIcons[name];

  const handleSearch = () => {
    setName(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="flex flex-row justify-center align-center gap-4">
      <div className="flex flex-2 px-6 py-2 bg-white rounded-3xl transition hover:bg-white/90">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="search"
          placeholder="Search"
          value={inputValue}
          className="text-gray-500 cursor-text focus:outline-none max-w-50"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-white rounded-3xl p-4 content-center cursor-pointer hover:"
      >
        <img src={icon} alt={name} className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};

export default Search;
