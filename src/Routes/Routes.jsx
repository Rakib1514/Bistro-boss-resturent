import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Common/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/cart/Cart";
import AllUsers from "../Pages/Dashboard/All-Users/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItem/AddItems";
import UserHome from "../Pages/Dashboard/user-home/UserHome";
import ManageItems from "../Pages/Dashboard/Manage-Items/ManageItems";
import UpdateItem from "../Pages/Dashboard/Update-Item/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "log-in",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Secret />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "add-Items",
        element: <AdminRoutes><AddItems /></AdminRoutes>,
      },
      {
        path: "users",
        element: <AdminRoutes><AllUsers /></AdminRoutes>,
      },
      {
        path: "admin-home",
        element: <AdminRoutes><UserHome /></AdminRoutes>,
      },
      {
        path: "manage-items",
        element: <AdminRoutes><ManageItems /></AdminRoutes>,
      },
      {
        path: "update-item/:id",
        element: <AdminRoutes><UpdateItem /></AdminRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ],
  },
]);

export default router;
