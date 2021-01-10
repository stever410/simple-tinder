import React from "react";

const RoundedButton: React.FC<any> = ({icon, onClick}) => {
  console.log("Button rendered")
  return <div className="mx-4">
    <button className="rounded-full h-14 w-14 flex items-center justify-center shadow-xl text-2xl hover:bg-gray-50 focus:outline-none" onClick={onClick}>{icon}</button>
  </div>;
};

export default RoundedButton;
