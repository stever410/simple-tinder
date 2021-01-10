import React, { useState } from "react";
import { IoClose, IoHeart, IoStarSharp } from "react-icons/io5";
import Header from "./components/Header";
import Image from "./components/Image";
import RoundedButton from "./components/RoundedButton";
import StatusBar from "./components/StatusBar";
import useFetchUser, { ACTIONS } from "./useFetchUser";

export type User = {
  id: {
    name: string;
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: {
    date: Date;
    age: number;
  };
  nat: string;
  picture: {
    large: string;
    thumbnail: string;
  };
};

type UserContextType = {
  gender: string;
  setGender: (gender: string) => void;
};

export const UserContext = React.createContext<UserContextType>({
  gender: "",
  setGender: () => {},
});

const App = () => {
  const [params, setParams] = useState({});
  const [state, dispatch] = useFetchUser(params);
  const { loading, error, user, like, dislike } = state;
  const [gender, setGender] = useState("");

  return (
    <div className="flex flex-col items-center justify-center font-custom min-h-screen bg-gradient-to-r from-electric-pink via-fiery-rose to-pastel-red">
      <UserContext.Provider value={{ gender, setGender }}>
        <StatusBar like={like} dislike={dislike} setParams={setParams} />
        <div className="bg-white container lg:w-1/3 md:w-1/2">
          <Header />
          {loading && (
            <h3 className="font-bold text-center text-lg">Loading...</h3>
          )}
          {error && (
            <h3 className="font-bold text-center text-lg">
              Error. Try refreshing.
            </h3>
          )}
          {user && <Image user={user} />}
          <div className="flex justify-center my-4">
            <RoundedButton icon={<IoStarSharp className="text-blue-500" />} />
            <RoundedButton
              icon={
                <IoClose
                  className="text-gray-500"
                  onClick={() => dispatch({ type: ACTIONS.DISLIKE })}
                />
              }
            />
            <RoundedButton
              icon={
                <IoHeart
                  className="text-red-500"
                  onClick={() => dispatch({ type: ACTIONS.LIKE })}
                />
              }
            />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
