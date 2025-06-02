import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AddFood from "../pages/AddFood";
import AllFoods from "../pages/AllFoods";
import DetailsPage from "../pages/DetailsPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyFoods from "../pages/MyFoods";
import Register from "../pages/Register";
import UpdateFood from "../pages/UpdateFood";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://incubator-assignment.vercel.app/all-foods"),
      },
      {
        path: "/food/:id",
        element: <DetailsPage />,
        loader: ({ params }) =>
          fetch(`https://incubator-assignment.vercel.app/food/${params.id}`),
      },
      {
        path: "/all-foods",
        element: <AllFoods />,
        loader: () =>
          fetch("https://incubator-assignment.vercel.app/all-foods"),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-foods",
        element: (
          <PrivateRoute>
            <MyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://incubator-assignment.vercel.app/food/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Router;
