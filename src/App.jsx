import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Homapage from "./pages/home/homepage.component.jsx";
import Shoppage from "./pages/shop/shoppage.component";
import SingInAndSingUp from "./pages/sing-In-And-sing-up/SingInAndSingUp";

const App = (props) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homapage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/signin" element={<SingInAndSingUp />} />
      </Routes>
    </div>
  );
};

export default App;
