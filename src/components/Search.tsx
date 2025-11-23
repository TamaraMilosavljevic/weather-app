import { useCallback, useRef } from "react";
import search from "../assets/search.png";

interface SearchProps {
  name: string;
}
const searchIcons: Record<string, string> = {
  Search: search,
};

const Search: React.FC<SearchProps> = ({ name }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const icon = searchIcons[name];

  const handleSearch = useCallback(() => {
    const value = inputRef.current?.value || "";
    alert("Searching for:" + value);
    console.log("search conducting for" + value);
  }, [inputRef]);

  return (
    <div className="flex flex-row justify-center align-center gap-4">
      <div className="flex flex-2 px-6 py-2 bg-white rounded-3xl transition hover:bg-white/90">
        <input
          ref={inputRef}
          type="search"
          placeholder="Search"
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
