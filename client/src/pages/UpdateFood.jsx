import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const UpdateFood = () => {
  const { user } = use(AuthContext);

  const foodData = useLoaderData();

  const {
    food_name,
    food_image,
    food_quantity,
    location,
    expired_date,
    additional_notes,
    status,
    _id,
  } = foodData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    fetch(`https://incubator-assignment.vercel.app/update-food/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      {/* Form */}
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
          <div className="mb-8">
            <h2 className="text-2xl text-center font-bold text-gray-800">
              Update Food Information
            </h2>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-food-name"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5"
                >
                  Food name
                </label>
              </div>

              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    id="af-food-name"
                    type="text"
                    name="food_name"
                    defaultValue={food_name}
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter Your Food Name Here"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-food-image"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5"
                >
                  Food Image URL
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  id="af-food-image"
                  type="url"
                  name="food_image"
                  defaultValue={food_image}
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter URL of the image"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-food-quantity"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5"
                >
                  Food Quantity
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  id="af-food-quantity"
                  type="number"
                  name="food_quantity"
                  defaultValue={food_quantity}
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter Food Quantity"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    htmlFor="af-food-location"
                    className="inline-block text-base font-semibold text-gray-600 mt-2.5"
                  >
                    Pickup Location
                  </label>
                </div>
              </div>

              <div className="sm:col-span-9">
                <select
                  name="location"
                  defaultValue={location}
                  className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="Dhaka">Dhaka</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-food-expired-date"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5"
                >
                  Expired Date/Time
                </label>
              </div>

              <div className="sm:col-span-9 ">
                <div className="sm:flex ">
                  <input
                    type="date"
                    name="expired_date"
                    defaultValue={expired_date}
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-food-notes"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5"
                >
                  Additional Notes
                </label>
              </div>

              <div className="sm:col-span-9">
                <textarea
                  id="af-food-notes"
                  name="additional_notes"
                  defaultValue={additional_notes}
                  className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:cursor-not-allowed"
                  rows="6"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-food-status"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5"
                >
                  Food Status
                </label>
              </div>

              <div className="sm:col-span-9">
                <select
                  name="status"
                  defaultValue={status}
                  className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-user-name"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5"
                >
                  User Name
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  readOnly
                  id="af-user-name"
                  defaultValue={user?.displayName}
                  type="text"
                  name="user_name"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] read-only:opacity-50 read-only:cursor-not-allowed"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-user-email"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5"
                >
                  User Email
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  readOnly
                  id="af-user-email"
                  type="email"
                  name="user_email"
                  defaultValue={user?.email || "User"}
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] read-only:opacity-50 read-only:cursor-not-allowed"
                  placeholder="Enter Your Email Address"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="reset"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#ED4C67] text-white hover:bg-[#B53471] disabled:cursor-not-allowed"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
