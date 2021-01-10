import React from "react";

const RoundedButton: React.FC<any> = ({icon}) => {
  const handleClick = () => {
    console.log("Button clicked")
  };

  return <div className="mx-4">
    <div className="rounded-full h-14 w-14 flex items-center justify-center shadow-xl text-2xl hover:bg-gray-50" onClick={handleClick}>{icon}</div>
  </div>;
};

export default RoundedButton;
