import { Outlet, NavLink } from "react-router";

import Footer from "./pages/Footer";
const NavBar = () => {
  return (
    <div>
      <div className=" bg-transparent fixed z-10 w-full">
        <div className="flex flex-row justify-between mx-16 p-6 text-l">
          <div className="flex flex-row gap-3 items-center">
            <NavLink
              className="border-2 px-6 p-1 rounded-full  border-black hover:bg-black hover:text-white flex items-center"
              to="/"
            >
              SHOP
            </NavLink>
            <NavLink
              className="border-2 px-6 p-1 rounded-full border-black hover:bg-black hover:text-white flex items-center"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink to="/search">
              <img className="w-5 h-5" src="/search.png" alt="" />
            </NavLink>
          </div>
          <h1 className="text-2xl">MADCAPS</h1>
          <div className="flex flex-row gap-6 items-center">
            <NavLink to="/account">
              <img className="w-6 h-6" src="/user.png" alt="" />
            </NavLink>
            <NavLink
              className="border-2 px-6 p-1 rounded-full border-black hover:bg-black hover:text-white flex items-center"
              to="/cart"
            >
              CART
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
