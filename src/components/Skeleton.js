import React from "react";

const Skeleton = () => {
  return (
    <div
      className="w-60 p-4  mx-auto mt-20 rounded-2xl
      shadow-2xl"
    >
      <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
        {/* <div className="w-12 bg-green-300 h-12 rounded-full "></div> */}
        <div className="flex flex-col ">
          <div className="w-48 h-48 bg-green-300  rounded-md "></div>
          <div className="w-24 bg-green-300 h-3 my-8 rounded-md "></div>
          <div className="flex flex-row justify-between">
            <div className="w-8 bg-green-300 h-8 rounded-full " />
            <div className="w-8 bg-green-300 h-8 rounded-full " />
            <div className="w-8 bg-green-300 h-8 rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
