import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <div className="w-full h-16 px-4 py-3 flex justify-between items-center shadow">
        <img
          src="/assets/img/logo.png"
          alt="freed logo"
          className="w-12 h-12 object-contain"
        />
        <button
          className="text-white bg-primary-100 py-2 px-6 rounded-[32px] shadow-md shadow-purple-300 text-sm font-bold"
          onClick={() => navigate("/login_method")}
        >
          Login
        </button>
      </div>
      <div className="text-center lg:max-w-5/12 mx-auto py-8 h-full py-auto">
        <h1 className="text-3xl my-4 font-bold text-shades-200">Freed</h1>
        <div className="text-xl px-2">
          <p>
            Welcome to{" "}
            <span className="text-primary-100 font-semibold">FREED</span>, the
            pioneering space where talent meets opportunity in the decentralized
            world
          </p>
        </div>

        <img
          src="/assets/img/welcome_img.svg"
          className="w-1/2 h-1/2 object-contain my-8 mx-auto"
          alt="welcome illustration"
        />
      </div>
    </div>
  );
}

export default Welcome;
