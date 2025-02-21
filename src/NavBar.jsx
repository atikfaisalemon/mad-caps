import { Outlet, NavLink } from "react-router"; // Fixed import path
import UserContext from "./context/UserContext";
import { useContext } from "react";
import Footer from "./pages/Footer";

const NavBar = () => {
  const { totalQuantity } = useContext(UserContext);

  return (
    <div>
      <div className="bg-transparent fixed z-10 w-full">
        <div className="flex flex-row justify-between mx-16 p-6 text-l">
          <div className="flex flex-row gap-3 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `border-2 px-6 p-1 rounded-full border-black flex items-center ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`
              }
            >
              SHOP
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `border-2 px-6 p-1 rounded-full border-black flex items-center ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`
              }
            >
              ABOUT
            </NavLink>
            <NavLink to="/search">
              <img className="w-5 h-5" src="/search.png" alt="Search" />
            </NavLink>
          </div>
          <h1 className="text-2xl">MADCAPS</h1>
          <div className="flex flex-row gap-6 items-center">
            <NavLink to="/account">
              <img className="w-6 h-6" src="/user.png" alt="User" />
            </NavLink>
            <NavLink
              to="/cartlist"
              className={({ isActive }) =>
                `border-2 px-6 p-1 rounded-full border-black flex items-center ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`
              }
            >
              CART {totalQuantity}
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default NavBar;
