import { Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./NavBar";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Search from "./pages/Search";
import CapDetails from "./pages/CapDetails";
// import Footer from "./pages/Footer";

function App() {
  return (
    <Routes>
      <Route>
        <Route element={<NavBar />}>
          <Route path="/" element={<Shop />} />
          <Route path="/:id" element={<CapDetails />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
