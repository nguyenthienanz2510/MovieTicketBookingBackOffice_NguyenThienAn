import React from "react";
import { PacmanLoader } from "react-spinners";
import { useSelector } from "react-redux";

export default function SpinnerComponent() {
  const { isLoading } = useSelector((state) => {
    console.log(state.spinnerSlice.isloading);
    return state.spinnerSlice;
  });
  return isLoading ? (
    <div className=" z-50  h-screen w-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <PacmanLoader size={80} color="#FF5B00" className="-translate-x-1/2" />
    </div>
  ) : (
    <></>
  );
}
