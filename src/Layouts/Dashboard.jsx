import {
  FaCalendar,
  FaCalendarCheck,
  FaComment,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-6">
      <div className="w-64 min-h-svh bg-primaryD pt-6">
        <ul className="menu uppercase ">
          <li>
            <NavLink to="/dashboard/user-home">
              <FaHome /> <span>User Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar /> <span>Reservation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart /> <span>My Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-review">
              <FaComment /> <span>Add review</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-booking">
              <FaCalendarCheck /> <span>My booking</span>
            </NavLink>
          </li>

          <div className="divider" />

          {/* Link for Main page */}
          <li>
            <Link to="/">
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/order/salad">
            <MdOutlineMenuBook />
            <span>menu</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 pt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
