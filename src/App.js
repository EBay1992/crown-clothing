import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homapage from "./pages/homepage.component.jsx";

const HatPage = () => {
  return <div>hats</div>;
};

const App = (props) => {
  console.log(props);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homapage />} />
        <Route path="/hats" element={<HatPage />} />
      </Routes>
    </div>
  );
};

export default App;
