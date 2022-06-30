import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";
import House from "./House";
const HomeList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return <div className="text-center text-3xl text-red-600 font-mono mt-40">Sorry, nothing found</div>;
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
          {houses.map((house, index) => {
            return (
              <Link key={index} to={`/property/${house.id}`}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeList;
