import React from "react";

const TrainerCard = ({ item }) => {
  const { firstname, image, lastname } = item;
  return (
    <div class="w-64  bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
      <div class="mt-6 w-fit ">
        <img
          src={image}
          className="rounded-full "
          alt="profile picture"
          srcSet=""
        />
      </div>

      <div class="mt-8 ">
        <h2 class="text-white font-bold text-2xl tracking-wide">
          {firstname} <br /> {lastname}
        </h2>
      </div>
      <p class="text-emerald-400 font-semibold mt-2.5">Active</p>

      <div class="h-1 w-full bg-black mt-8 rounded-full">
        <div class="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
      </div>
      <div class="mt-3 text-white text-sm">
        <span class="text-gray-400 font-semibold">Storage:</span>
        <span>40%</span>
      </div>
    </div>
  );
};

export default TrainerCard;
