import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Homapage from "./pages/home/homepage.component.jsx";
import Shoppage from "./pages/shop/shoppage.component";
import SingInAndSingUp from "./pages/sing-In-And-sing-up/SingInAndSingUp";

import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utility";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, []);

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
