import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Common/Navbar";
import Footer from "../Pages/Common/Footer";

const Main = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("log-in") ||
    location.pathname.includes("sign-up");

  return (
    <div>
      {isLogin || <Navbar />}
      <Outlet />
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
