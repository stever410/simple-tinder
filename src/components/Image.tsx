import React from "react";
import { User } from "../App";

interface Props {
  user: User;
}

const Image: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="rounded-full shadow-lg"
        src={props.user.picture.large}
        alt={props.user.name.toString()}
      />
      <div className="p-4 rounded-lg mt-4 text-center">
        <h6 className="text-left font-medium">
          {props.user.name.last + " " + props.user.name.first}
        </h6>
        <p className="text-sm font-light">
          {props.user.nat + " - " + props.user.dob.age}
        </p>
      </div>
    </div>
  );
};

export default Image;
