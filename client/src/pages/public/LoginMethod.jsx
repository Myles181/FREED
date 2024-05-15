import React from "react";

function LoginMethod() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-16 px-4 py-3 shadow">
        <img
          src="/assets/img/logo.png"
          alt="freed logo"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="w-full flex ">
        <div className="relative shadow w-5/12">
          <div className="w-full mx-auto">
            <img
              src="/assets/img/stars.png"
              alt="illustration 1"
              className="w-72 h-20 object-contain my-4 mx-auto"
            />
            <img
              src="/assets/img/avatar2.png"
              alt="illustration 1"
              className="w-450 h-450 object-contain my-4 mx-auto"
            />
          </div>
          <div className="w-full">
            <img
              src="/assets/img/cols2.png"
              alt="illustration 2"
              className="absolute bottom-0 w-full "
            />
          </div>
        </div>
        <div className="flex-1 h-full px-24">
          <div>
            <img
              src="/assets/img/logo.png"
              alt="freed logo"
              className="w-28 h-40 object-contain mx-auto my-8"
            />
          </div>
          <p className="my-4 font-semibold">Choose The login method you want</p>
          <div className="w-3/5 h-fit mx-auto">
            <button className="w-full text-center py-2 rounded-md shadow-md my-4 font-semibold text-primary-100 mx-auto">
              Connect Wallet
            </button>
          </div>

          <p className="font-semibold my-4">Recommended</p>
          <div
            className="grid grid-cols-3 gap-4
          "
          >
            <div className="py-4 px-6 text-center rounded-lg shadow-lg">
              <img
                src="/assets/img/metamask.png"
                alt="metamask"
                className="w-32 h-32 object-contain mx-auto"
              />
              <p className="my-4 font-bold">Metamask</p>
            </div>
            <div className="py-4 px-6 text-center rounded-lg shadow-lg">
              <img
                src="/assets/img/walletConnect.png"
                alt="walletConnect"
                className="w-32 h-32 object-contain mx-auto"
              />
              <p className="my-4 font-bold">Wallet connect</p>
            </div>
            <div className="py-4 px-6 text-center rounded-lg shadow-lg">
              <img
                src="/assets/img/coinbase.png"
                alt="Coinbase"
                className="w-32 h-32 object-contain mx-auto"
              />
              <p className="my-4 font-bold">Coinbase</p>
            </div>
          </div>
          <center className="my-4">
            <p className="font-semibold my-4">OR</p>
          </center>
          <div className="w-1/2 mx-auto flex items-center gap-4 my-4 justify-center">
            <img
              src="/assets/img/Twitter.png"
              alt="twitter logo"
              className="w-9 h-9"
            />
            <img
              src="/assets/img/Linkedin.png"
              alt="linkedin logo"
              className="w-9 h-9"
            />
            <img
              src="/assets/img/Google.png"
              alt="google logo"
              className="w-9 h-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMethod;
