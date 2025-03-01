import React from "react";
import logoImage from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className="h-[13vh] overflow-hidden shadow-md">
      <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between">
        <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
          <img src={logoImage} alt="logo" width={250} height={250} />
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={()=>navigate("/signup")} className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:[py-2] bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
