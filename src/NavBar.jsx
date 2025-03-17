import { Outlet, NavLink } from "react-router";
import UserContext from "./context/UserContext";
import { useContext, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing burger and cross icons
import { FiSearch, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router";
import Footer from "./pages/Footer";

const NavBar = () => {
  const { totalQuantity } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { query, setQuery } = useContext(UserContext);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hides navbar when scrolling down
      } else {
        setIsVisible(true); // Shows navbar when scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log("qurey", query);
  return (
    <div>
      {/* 🖥️ Desktop Navbar */}
      <div
        className={`hidden md:block fixed z-10 w-full transition-all duration-300 ${
          isVisible ? "top-0" : "-top-24"
        } bg-white`}
      >
        {/* 🔍 Search Box (Dropdown Animation) */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isSearchOpen ? "max-h-[100px]" : "max-h-0"
          }`}
        >
          <form
            className="w-full bg-white flex items-center px-20 py-3"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              navigate(`/search?query=${query}`); // Navigate to search page with query
            }}
          >
            <input
              onChange={(e) => setQuery(e.target.value)}
              className="text-3xl text-black w-full focus:outline-none"
              placeholder="Search"
              type="text"
              value={query}
            />
          </form>

          <div className="bg-black w-full h-1"></div>
        </div>

        {/* 🖥️ Desktop Navbar Content */}
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

            {/* 🔍 Search Button */}
            <NavLink>
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <FiSearch />
              </button>
            </NavLink>
          </div>

          <h1 className="md:text-2xl">MADCAPS</h1>

          <div className="flex flex-row gap-6 items-center">
            <NavLink to="/account">
              <FiUser className="text-xl " />
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

      {/* 📱 Mobile Navbar */}
      <div
        className={`block fixed md:hidden w-full z-20 bg-white p-4 px-3  transition-all duration-300 ${
          isVisible ? "top-0" : "-top-24"
        }`}
      >
        {/* 🔍 Mobile Search Box (Dropdown) */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isSearchOpen ? "max-h-[100px]" : "max-h-0"
          }`}
        >
          <form
            className="w-full bg-white flex items-center px-5 py-2"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              navigate(`/search?query=${query}`); // Navigate to search page with query
            }}
          >
            <input
              onChange={(e) => setQuery(e.target.value)}
              className="text-2xl placeholder-black w-full focus:outline-none"
              placeholder="Search"
              type="text"
              value={query}
            />
          </form>

          <div className="bg-black w-full h-1 mb-2"></div>
        </div>

        {/* 📱 Mobile Navbar Main Section */}
        <div className="flex justify-between items-center">
          {/* 🍔 Burger Menu & Search Button */}
          <div className="flex flex-row items-center gap-3 text-xl">
            <button
              onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
              className="border-2 border-black rounded-full p-2"
            >
              {isBurgerMenuOpen ? (
                <FaTimes className="w-4 h-4" />
              ) : (
                <FaBars className="w-4 h-4" />
              )}
            </button>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <FiSearch className="w-5 h-5" />
            </button>
          </div>

          {/* 🏷️ Brand Name */}
          <NavLink to="/">
            <h1 className="text-xl">MADCAPS</h1>
          </NavLink>

          {/* 🛒 User & Cart Icons */}
          <div className="flex flex-row items-center gap-3">
            <NavLink to="/cartlist" className="relative">
              <div className="border-2 p-1 px-2 rounded-full relative">
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                    {totalQuantity}
                  </span>
                )}
                CART
              </div>
            </NavLink>
          </div>
        </div>

        {/* 🍔 Burger Menu Items */}
        {isBurgerMenuOpen && (
          <div className="flex flex-col items-center mt-4">
            <NavLink
              to="/"
              className="border-2 px-6 p-1 rounded-full border-black w-full text-center py-2 mb-2 hover:bg-black hover:text-white"
            >
              SHOP
            </NavLink>
            <NavLink
              to="/about"
              className="border-2 px-6 p-1 rounded-full border-black w-full text-center py-2 mb-2 hover:bg-black hover:text-white"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/account"
              className="border-2 px-6 p-1 rounded-full border-black w-full text-center py-2 mb-2 hover:bg-black hover:text-white"
            >
              ACCOUNT
            </NavLink>
          </div>
        )}
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default NavBar;
