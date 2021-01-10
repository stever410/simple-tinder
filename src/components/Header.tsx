import React from "react";
import { IoPersonCircleOutline, IoChatbubbleEllipses } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-auto p-4">
      <IoPersonCircleOutline className="text-gray-700 text-2xl" />
      <h3 className="text-3xl font-bold text-gray-700">For You</h3>
      <IoChatbubbleEllipses className="text-gray-700 w-6 text-2xl" />
    </div>
  );
};

export default Header;
