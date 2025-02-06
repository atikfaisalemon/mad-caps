import { Routes, Route } from "react-router";
import UserContextProvider from "./context/UserContextProvider";
import NavBar from "./NavBar";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Account from "./pages/Account";
import Search from "./pages/Search";
import CapDetails from "./pages/CapDetails";
import CartList from "./pages/CartList";
// import Footer from "./pages/Footer";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route>
          <Route element={<NavBar />}>
            <Route path="/" element={<Shop />} />
            <Route path="/:id" element={<CapDetails />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<Search />} />
            <Route path="account" element={<Account />} />
            <Route path="cartlist" element={<CartList />} />
          </Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
