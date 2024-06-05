import React from "react";
import I1 from "../assets/motionarteffect-img9.png";
import I2 from "../assets/motionarteffect-img6.png";
import I3 from "../assets/motionarteffect-img7.png";

const Features = () => {
  return (
    <div className="my-24 mx-5 ">
      <div className="flex flex-col items-center">
        <h1 className="text-xl max-w-lg text-center sm:text-2xl text-white font-medium mb-6">
          An All-Round Solution With Powerful Features
        </h1>
        <p className="max-w-lg text-md  text-gray-400 text-center mb-6">
          Whether you're a seasoned business or just starting out, ARFADS seamlessly integrates with your platform,
          providing you and your customers with a dynamic and intuitive experience.
        </p>
      </div>
      <div className="flex flex-wrap justify-around gap-5">
        <div className="flex-1 w-full min-w-72 bg-gradient-to-b from-lg1 to-lg2 border border-bd rounded-xl m-2 px-7 py-10">
          <img src={I1} alt="Img" className="-mx-9"/>
          <h1 className="font-semibold text-xl text-white mb-2">Social Media Marketing</h1>
          <p className="text-gray-400 text-lg">Skyrocket brand awareness, fuels engagement, & convert followers into paying customers.<span className="font-bold text-white"> 75%</span> of people report buying a product after seeing it on social media.
</p>
        </div>
        <div className="flex-1 w-full min-w-72 bg-gradient-to-b from-lg1 to-lg2 border border-bd rounded-xl m-2 px-7 py-10">
          <img src={I2} alt="Img" className="-mx-9"/>
          <h1 className="font-semibold text-xl text-white mb-2">Website Creation & SEO</h1>
          <p className="text-gray-400 text-lg">Boost sales with Landing pages that increase conversion rates by <span className="font-bold text-white">300%</span>, and dominate traffic with SEO optimization to capture <span className="font-bold text-white">95%</span> of traffic.</p>
        </div>
        <div className="flex-1 w-full min-w-72 bg-gradient-to-b from-lg1 to-lg2 border border-bd rounded-xl m-2 px-7 py-10">
          <img src={I3} alt="Img" className="-mx-9"/>
          <h1 className="font-semibold text-xl text-white mb-2">Ads & Analytics</h1>
          <p className="text-gray-400 text-lg">Seize attention and boost sales by <span className="font-bold text-white">21% </span>with impactful Advertising! Use Google Analytics to gain insights and achieve a <span className="font-bold text-white">16%</span> increase in revenue.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
