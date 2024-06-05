import React from "react";
import I1 from "../assets/motionarteffect-img11.png";
import I2 from "../assets/motionarteffect-img10.png";
const Apply = () => {
  return (
    <div className="px-5 pt-24">
      <div className="w-full ">
        <p className="mx-auto max-w-xl text-4xl font-medium text-white text-center">
        Engage in creating dynamic, attention grabbing social media posts for your business!
        </p>
      </div>
      <div className="flex mt-9 flex-col md:flex-row gap-3">
        <div className="flex-1 m-2 bg-gradient-to-b from-lg1 to-lg2 rounded-2xl border border-bd p-7 h-fit">
          <h1 className="text-2xl font-semibold text-white mb-2">
            Boost Your Business
          </h1>
          <p className="text-gray-500 text-lg mb-5">
          Take your business to new heights with ArfAds. Embrace the power of motion and animation.
          </p>
          
          <img src={I1} className="object-contain rounded-lg w-full flex items-end" />
        </div>
        <div className="flex-1 mx-2 md:mt-16 bg-gradient-to-b from-lg1 to-lg2 rounded-2xl border border-bd p-7">
          <h1 className="text-2xl font-semibold text-white mb-2">
            Social Media Mania
          </h1>
          <p className="text-gray-500 text-lg mb-5">
          Regular Social Media Posting is a game-changer, offering an unparalleled way to draw and gain customer traction.
          </p>
          <img src={I2} className="object-contain rounded-lg w-full  flex items-end" />
        </div>
      </div>
    </div>
  );
};

export default Apply;
