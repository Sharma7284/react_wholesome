import React from "react";
import Header from "./components/Common/Header/header.tsx";
import Footer from "./components/Common/Footer/footer.tsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing/landing.tsx";
import Community from "./pages/Community/community.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/login.tsx";
import Register from "./pages/Register/register.tsx";
import Dashboard from "./pages/Dashboard/dashboard.tsx";

const App = () => {
  const location = useLocation();

  const noHeaderFooterRoutes = [`/login`, `/register`];

  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <div className="app-root">
      {!shouldHideHeaderFooter && <Header></Header>}
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/community" element={<Community></Community>}></Route>
        <Route path="/community/:id" element={<Community></Community>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      {!shouldHideHeaderFooter && <Footer></Footer>}
      <ToastContainer autoClose={300}></ToastContainer>
    </div>
  );
};

export default App;
