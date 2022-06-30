import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div
      className="px-[30px] py-6 max-w-[1196px] mx-auto flex flex-col lg:flex-row justify-between gap-3
    relative lg:-top-5 lg:shadow bg-white lg:bg-transparent lg:backdrop-blur rounded "
    >
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:via-violet-800 transition w-full lg:max-w-[150px] h-16 
        flex justify-center items-center text-white text-lg rounded"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
