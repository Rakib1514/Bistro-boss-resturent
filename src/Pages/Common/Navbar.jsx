import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Providers/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [btnLoading, setBtnLoading] = useState(false);

  const handleSignOut = async () => {
    setBtnLoading(true);
    try {
      await signOutUser();
    } catch (error) {
      alert(error.message);
    } finally {
      setBtnLoading(false);
    }
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Food</NavLink>
      </li>
      <li>
        <NavLink to={"/secret"}>secret</NavLink>
      </li>

      {
        //if user is true
        user ? (
          <>
            <button onClick={handleSignOut}> Log out</button>
          </>
        ) : (
          // if User false
          <>
            <li>
              <NavLink to={"/log-in"}>Log in</NavLink>
            </li>
          </>
        )
      }
    </>
  );

  return (
    <>
      <div className="navbar fixed bg-opacity-30 z-10 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl font-semibold">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">something</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
