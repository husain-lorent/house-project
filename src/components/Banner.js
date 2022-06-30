import React from "react";

import Image from "../assets/img/house-banner.png";
import Search from "./Search";
const Banner = () => {
  return (
    <section className="h-full max-h-[600px] mb-8 xl:mb-20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-24 lg:items-center text-center lg:text-left justify-center flex-1">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            A house title is the bundle of rights that dictates who has legal or
            equitable interest in the property. In real estate, a document
            called a deed records a property's title and the transfer of that
            title between two parties or individuals.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
