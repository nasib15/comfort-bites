import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";

const Home = () => {
  const allFoods = useLoaderData();

  return (
    <>
      <Banner />
      <FeaturedSection allFoods={allFoods} />
    </>
  );
};
export default Home;
