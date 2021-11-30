import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homapage from "./pages/home/homepage.component.jsx";
import Shoppage from "./pages/shop/shoppage.component";

const App = (props) => {
  console.log(props);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homapage />} />
        <Route path="/shop" element={<Shoppage />} />
      </Routes>
    </div>
  );
};

export default App;
