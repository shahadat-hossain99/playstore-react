import React from "react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import HeroImg from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="min-h-[80vh] bg-gray-200 text-center space-y-8 pt-13">
      <h2 className="font-bold text-5xl">
        We Build <br />{" "}
        <span className=" text-purple-500 font-extrabold"> Productive </span>
        Apps
      </h2>
      <p className="text-gray-500 font-medium max-w-1/2 mx-auto">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br /> Our goal is to turn your ideas into digital experiences that
        truly make an impact.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="btn  border-gray-300  bg-purple-200 btn-soft font-bold">
          <FaGooglePlay /> Google Play
        </button>
        <button className="btn bg-purple-200 btn-soft border-gray-300 font-bold ">
          <FaAppStoreIos /> App Store
        </button>
      </div>
      <img className="mx-auto" src={HeroImg} alt="" />
    </div>
  );
};

export default Banner;
