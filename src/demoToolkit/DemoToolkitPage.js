import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { giamSoLuong, tangSoLuong } from "../redux/slices/demoSlice";

export default function DemoToolkitPage() {
  let number = useSelector((state) => {
    return state.demoSlice.number;
  });
  let dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(tangSoLuong(10));
        }}
        className="px-5 py-2 rounded bg-blue-400"
      >
        Tang
      </button>
      <span className="mx-20">{number}</span>

      <button
        onClick={() => {
          dispatch(giamSoLuong(1));
        }}
        className="px-5 py-2 rounded bg-red-400"
      >
        Giam
      </button>
    </div>
  );
}
