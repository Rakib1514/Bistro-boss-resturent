import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'menu',
        element: <Menu/>
      }
    ]
  }
])

export default router;