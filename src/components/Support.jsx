import React from "react";
import I1 from "../assets/support.png"

const Support = () => {
  return (
    <div className="mx-5 mb-5 mt-16 px-7 py-12 border border-bd rounded-2xl bg-gradient-to-b from-lg1 to-lg2 flex flex-col items-center ">
        <h1 className="text-xl text-center sm:text-3xl text-white font-medium mb-6">Supports All Popular Business Niches</h1>
        <p className="max-w-md text-md sm:text-lg text-gray-400 text-center mb-6">Rest assured, ARFADS is designed to be compatible with all major business types.</p>
        <img alt="Image" src={I1}/>
    </div>
  );
};

export default Support;
