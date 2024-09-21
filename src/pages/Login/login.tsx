import React from "react";
import APP_LOGO from "../../assets/images/wh_logo.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#085946] min-h-screen flex flex-col gap-8 items-center justify-center">
      <div className="cursor-pointer" onClick={() => navigate(`/`)}>
        <img src={APP_LOGO} alt="app_logo.png" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="bg-white">d</div>
        <div className="bg-white">d</div>
      </div>
    </div>
  );
};

export default Login;
