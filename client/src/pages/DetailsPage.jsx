import { useLoaderData } from "react-router";
import AvailableBatch from "../components/AvailableBatch";
import NotAvailableBatch from "../components/NotAvailableBatch";

const DetailsPage = () => {
  const foodData = useLoaderData();
  const {
    food_name,
    food_image,
    food_quantity,
    expired_date,
    location,
    additional_notes,
    status,
    user_name,
    user_image,
  } = foodData;

  console.log(foodData);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-36 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 sm:items-center gap-8">
        <div className="sm:order-2">
          <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
            <img
              className="size-full absolute top-0 start-0 object-cover rounded-lg"
              src={food_image}
              alt="Image Description"
            />
          </div>
        </div>

        <div className="sm:order-1">
          <div className="flex gap-4">
            <p className="mb-5 text-base inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md font-medium bg-gray-100 text-gray-700">
              Quantity: {food_quantity}
            </p>
            <p className="mb-5 text-base inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md font-medium bg-gray-100 text-gray-700">
              By: {new Date(expired_date).toLocaleDateString()}
            </p>
          </div>

          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800">
            <p className="hover:text-[#ED4C67] hover:cursor-pointer">
              {food_name}
            </p>
          </h2>
          <div className="mt-3">
            {status === "Available" ? (
              <AvailableBatch />
            ) : (
              <NotAvailableBatch />
            )}
          </div>
          <h3 className="mt-6 text-lg text-gray-700">
            Pickup Location: {location}
          </h3>
          <h4 className="mt-4 text-lg font-semibold text-gray-800">
            Additional Notes:
          </h4>
          <p className="sm:max-w-[80%] mt-2 text-gray-600">
            {additional_notes}
          </p>

          <div className="mt-6 sm:mt-10 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="size-10 sm:h-14 sm:w-14 rounded-full object-cover"
                src={user_image}
                alt="Image Description"
              />
            </div>

            <div className="ms-3 sm:ms-4">
              <p className="sm:mb-1 font-semibold text-gray-800">{user_name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
