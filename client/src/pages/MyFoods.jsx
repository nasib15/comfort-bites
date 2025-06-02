import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import FoodRow from "../components/FoodRow";
import { AuthContext } from "../providers/AuthProvider";

const MyFoods = () => {
  const [myFoods, setMyFoods] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`https://incubator-assignment.vercel.app/my-food/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyFoods(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const alert = window.confirm("Are you sure you want to delete this food?");

    if (alert) {
      fetch(`https://incubator-assignment.vercel.app/food/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const filteredArray = myFoods.filter((food) => food._id !== id);
            setMyFoods(filteredArray);
            toast.success("Food Deleted Successfully");
          }
        });
    }
  };

  return (
    <section className="container px-4 mx-auto py-10">
      <div className="flex items-center gap-x-3">
        <h2 className="text-2xl font-bold text-gray-800 ">My Foods</h2>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-2 -my-2 overflow-x-auto sm:-mx-2">
          <div className="inline-block min-w-full py-2 align-middle ">
            <div className="overflow-hidden border border-gray-200  rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Food Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      <span>Pickup Location</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      <div className="flex items-center gap-x-2">
                        <span>Quantity</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      Expiry Date
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      Additional Notes
                    </th>

                    <th className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {myFoods?.map((food) => (
                    <FoodRow handleDelete={handleDelete} food={food} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyFoods;
