import React from "react";

function SelectAccoutType() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-16 px-4 py-3 shadow">
        <img
          src="/assets/img/logo.png"
          alt="freed logo"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="w-7/12 mx-auto">
        <h2 className="text-3xl text-center font-semibold my-16">
          Set Up your profile
        </h2>

        <div className="flex justify-center items-center gap-4 my-5">
          <div className="rounded-lg px-4 pt-2 pb-3 border-2 border-primary-400 max-w-80">
            <div className="flex justify-between items-center">
              <img
                src="/assets/img/illust1.png"
                alt="person icon"
                className="w-14 h-14 object-contain"
              />
              <div className="w-6 h-6 rounded-md bg-primary-200"></div>
            </div>
            <div className="w-56 my-4 tracking-wide">
              <p className="font-semibold text-xl">
                I'm a client, hiring for a project
              </p>
            </div>
          </div>
          <div className="rounded-lg px-4 pt-2 pb-3 border-2 border-primary-400 max-w-80">
            <div className="flex justify-between items-center">
              <img
                src="/assets/img/illust2.png"
                alt="person icon"
                className="w-14 h-14 object-contain"
              />
              <div className="w-6 h-6 rounded-md bg-primary-300"></div>
            </div>
            <div className="w-56 my-4 tracking-wide">
              <p className="font-semibold text-xl">
                I'm a freelancer looking for work
              </p>
            </div>
          </div>
        </div>
        <button className="w-9/12 mx-auto bg-primary-100 text-white py-2 text-center">
          Continue
        </button>
      </div>
    </div>
  );
}

export default SelectAccoutType;
