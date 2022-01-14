import React from "react";

const TrainerCard = ({ item, selectedTrainer }) => {
  const { firstname, image, lastname } = item;
  return (
    <div
      className="w-64  bg-[#20354b] rounded-2xl p-8 shadow-lg cursor-pointer"
      onClick={() => selectedTrainer(firstname)}
    >
      <div className="mt-6 w-fit ">
        <img src={image} className="rounded-full " alt={image} srcSet="" />
      </div>

      <div className="mt-8 ">
        <h2 className="text-white font-bold text-2xl tracking-wide">
          {firstname} <br /> {lastname}
        </h2>
      </div>
      <p className="text-emerald-400 font-semibold mt-2.5">Active</p>

      <div className="h-1 w-full bg-black mt-8 rounded-full">
        <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
      </div>
      <div className="mt-3 text-white text-sm">
        <span className="text-gray-400 font-semibold">Storage:</span>
        <span>40%</span>
      </div>
    </div>
  );
};

export default TrainerCard;
