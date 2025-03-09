import { Routes, Route } from "react-router";
import UserContextProvider from "./context/UserContextProvider";
import NavBar from "./NavBar";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Account from "./pages/Account";
import Search from "./pages/Search";
import CapDetails from "./pages/CapDetails";
import CartList from "./pages/CartList";
import Checkout from "./pages/Checkout";
import CreateAccount from "./pages/CreateAccount";
import OrderSuccess from "./pages/OrderSuccess";
// import Footer from "./pages/Footer";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Shop />} />
          <Route path="/:id" element={<CapDetails />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="account" element={<Account />} />
          <Route path="cartlist" element={<CartList />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="ordersuccess" element={<OrderSuccess />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
