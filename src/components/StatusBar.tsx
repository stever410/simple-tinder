import React from "react";
import { IoClose, IoHeart } from "react-icons/io5";
import RoundedButton from "./RoundedButton";

const StatusBar = () => {
  return (
    <div className="lg:block hidden fixed top-4 left-4 bg-white text-center w-1/6 shadow-md">
      <img className="h-16 mx-auto" src={process.env.PUBLIC_URL + "icons/tinder_logo.png"} alt="Tinder logo"/>
      <div className="flex justify-center p-2">
        <span>
          <RoundedButton icon={<IoClose className="text-gray-500" />} />
          <div className="mt-2">0</div>
        </span>
        <span>
          <RoundedButton icon={<IoHeart className="text-red-500" />} />
          <div className="mt-2">0</div>
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
