import React from "react";
import { Link } from "react-router";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = ({ allFoods }) => {
  console.log(allFoods);
  return (
    <div id="foods" className="md:my-16 my-10">
      <div className="text-center space-y-3">
        <h2 className="font-bold text-3xl">Featured Foods</h2>
        <p className="opacity-80">
          Explore our curated culinary delights, from appetizers to desserts,
          for an unforgettable dining journey.
        </p>
      </div>
      {/* Card */}
      <div className="mt-10 grid lg:grid-cols-3 gap-8">
        {allFoods?.slice(0, 6)?.map((food) => (
          <FeaturedCard key={food.id} food={food} />
        ))}
      </div>
      {/* Show All btn */}
      <div className="flex justify-center mt-16">
        <button className="bg-[#ED4C67] hover:bg-[#B53471] px-7 py-3 text-lg hover:cursor-pointer rounded-lg text-white outline-none btn-lg hover:scale-105 transition-transform">
          <Link to={`/all-foods`}>Show All</Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
