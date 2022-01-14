import React from "react";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";

const TrainerCard = ({ item, selectedTrainer }) => {
  const { firstname, image, lastname } = item;
  return (
    <div
      className="w-72  bg-[#20354b] rounded-2xl p-8 shadow-2xl cursor-pointer"
      onClick={() => selectedTrainer(firstname)}
    >
      <div>
        <div className="mt-6 w-fit">
          <img src={image} className="rounded-lg" alt={image} srcSet="" />
        </div>

        <div className="mt-8 ">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {firstname} {lastname}
          </h2>
        </div>

        <div className="mt-8 flex justify-between">
          <img src={Twitter} alt={Twitter} srcSet="" className="h-8 w-8" />
          <img src={Instagram} alt={Twitter} srcSet="" className="h-8 w-8" />
          <img src={Facebook} alt={Facebook} srcSet="" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
