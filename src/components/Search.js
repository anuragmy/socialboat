import React from "react";

const Search = ({ search }) => {
  const handleChange = (e) => {
    search(e.target.value);
  };
  return (
    <div>
      <div className="pt-2 relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
