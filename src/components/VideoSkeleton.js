import React from "react";

const VideoSkeleton = () => {
  return (
    <div>
      <div
        className="p-4 rounded-2xl
          shadow-2xl"
        style={{ width: "fit-content" }}
      >
        <div className="flex animate-pulse flex-row  h-full  ">
          {/* <div className="w-12 bg-green-300 h-12 rounded-full "></div> */}
          <div className="flex flex-col ">
            <div className="w-96 h-48 bg-green-300  rounded-md "></div>
            <div className="w-48 bg-green-300 h-6 my-8 rounded-md "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSkeleton;
