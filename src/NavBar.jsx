import { Outlet, NavLink } from "react-router";

import Footer from "./pages/Footer";
import Search from "./pages/Search";
const NavBar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mx-16 p-6 text-xl">
        <div className="flex flex-row gap-6">
          <NavLink className="border-3 px-6 rounded-full border-black" to="/">
            Shop
          </NavLink>
          <NavLink
            className="border-3 px-6 rounded-full border-black"
            to="/about"
          >
            About
          </NavLink>
          <NavLink to="/search">Search</NavLink>
        </div>
        <h1>MADCAPS</h1>
        <div className="flex flex-row gap-6">
          <NavLink to="/account">Account</NavLink>
          <NavLink
            className="border-3 px-6 rounded-full border-black"
            to="/cart"
          >
            Cart
          </NavLink>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default NavBar;
