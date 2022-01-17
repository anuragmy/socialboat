import React from "react";

const Loading = () => {
  return (
    <div
      className=" fixed block top-0 left-0 text-green-500 opacity-75 z-50"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <span
        className="text-green-500  my-0 mx-auto block relative w-0 h-0"
        style={{
          top: "50%",
        }}
      >
        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
      </span>
    </div>
  );
};

export default Loading;
