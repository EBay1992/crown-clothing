import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/header/Header";
import Homapage from "./pages/home/homepage.component.jsx";
import Shoppage from "./pages/shop/shoppage.component";
import SingInAndSingUp from "./pages/sing-In-And-sing-up/SingInAndSingUp";

import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utility";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import store from "./redux/store";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state = store) => state.user.currentUser);

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
        <Route
          path="/signin"
          element={!currentUser ? <SingInAndSingUp /> : <Navigate to="/" />}
        />
        {/* <Route path="*" element={<Navigate to="/NotFound" />} /> */}
      </Routes>
    </div>
  );
};

export default App;
