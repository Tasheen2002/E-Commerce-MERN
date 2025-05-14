import React from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false); //setIsOpen is a function that updates the state of 'isOpen'

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          className="relative flex items-center justify-center w-full"
          onSubmit={handleSearch}
        >
          <div className="relative ml-4 w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 "
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Search Icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>

            {/* Close Icon */}
            <button
              type="button"
              onClick={handleSearchToggle}
              className="absolute -right-40 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMiniXMark className="h-6 w-6 " />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
