import React, { useContext } from "react";
import { IoClose, IoHeart } from "react-icons/io5";
import { UserContext } from "../App";
import RoundedButton from "./RoundedButton";

interface IProps {
  like: number;
  dislike: number;
  setParams: Function;
}

enum GENDER {
  "MALE" = "male",
  "FEMALE" = "female",
}

const StatusBar: React.FC<IProps> = ({ like, dislike, setParams }) => {
  const { setGender } = useContext(UserContext);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value;
    switch (selectedGender) {
      case GENDER.MALE:
        setGender(GENDER.FEMALE);
        setParams({ gender: GENDER.FEMALE });
        break;
      case GENDER.FEMALE:
        setGender(GENDER.MALE);
        setParams({ gender: GENDER.MALE });
        break;
      default:
        setParams({});
    }
  };
  return (
    <div className="lg:block hidden fixed top-4 left-4 bg-white text-center w-1/6 shadow-md pb-4">
      <img
        className="h-16 mx-auto"
        src={process.env.PUBLIC_URL + "icons/tinder_logo.png"}
        alt="Tinder logo"
      />
      <div className="flex justify-center p-2">
        <span>
          <RoundedButton icon={<IoClose className="text-gray-500" />} />
          <div className="mt-2">{dislike}</div>
        </span>
        <span>
          <RoundedButton icon={<IoHeart className="text-red-500" />} />
          <div className="mt-2">{like}</div>
        </span>
      </div>
      <div>
        <h4 className="italic my-4">Specify your info here</h4>
        <label className="mr-4">Gender:</label>
        <select
          className="p-1 border border-black"
          name="gender"
          onChange={handleChange}
          defaultValue=""
        >
          <option value={GENDER.MALE}>Male</option>
          <option value={GENDER.FEMALE}>Female</option>
          <option value="">Bisexual</option>
        </select>
      </div>
    </div>
  );
};

export default StatusBar;
