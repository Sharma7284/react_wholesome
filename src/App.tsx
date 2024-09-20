import React from "react";
import Header from "./components/Header/header.tsx";
import Footer from "./components/Footer/footer.tsx";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/landing.tsx";
import Community from "./pages/Community/community.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="app-root">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/community" element={<Community></Community>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
