import React from "react";
import { useLoaderData } from "react-router";
import FeaturedCard from "../components/FeaturedCard";

const AllFoods = () => {
  const foods = useLoaderData();
  return (
    <div>
      <div className="my-10">
        <div className="text-center space-y-3">
          <h1 className=" font-bold text-3xl">All Foods</h1>
          <p className="opacity-80">
            Discover a variety of fresh ingredients, culinary products, and menu
            offerings available for your culinary adventures.
          </p>
        </div>

        {/* Cards */}

        <div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[85rem] mx-auto">
            {foods?.map((food) => (
              <FeaturedCard food={food} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
