import React from "react";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";

const TrainerCard = ({ item, selectedTrainer }) => {
  const { firstname, image, lastname } = item;
  return (
    <div
      className="w-72  bg-[#20354b] rounded-2xl p-8 grow shadow-2xl cursor-pointer
     
      "
      onClick={() => selectedTrainer(firstname)}
    >
      <div>
        <div class="tc ">
          <img
            src={image}
            class="br-100 h4 w4 dib ba b--black-05 pa2"
            title="Photo of a kitty staring at you"
          />
          <h1 class="f3 mb2">{firstname} </h1>
          <h2 class="f5 fw4 gray mt0">{lastname}</h2>
        </div>
        {/* <div className="mt-6 w-fit">
          <img src={image} className="rounded-lg" alt={image} srcSet="" />
        </div>

        <div className="mt-8 ">
          <h2 className="text-white  font-bold text-2xl tracking-wide">
            {firstname} {lastname}
          </h2>
        </div> */}

        <div className="mt-8 flex justify-between">
          <img src={Twitter} alt={Twitter} srcSet="" className="h-8 w-8" />
          <img src={Instagram} alt={Twitter} srcSet="" className="h-8 w-8" />
          <img src={Facebook} alt={Facebook} srcSet="" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
  // return (
  //   <div class="tc  grow shadow-5">
  //     <img
  //       src={image}
  //       class="br-100 h4 w4 dib ba b--black-05 pa2"
  //       title="Photo of a kitty staring at you"
  //     />
  //     <h1 class="f3 mb2">{firstname} </h1>
  //     <h2 class="f5 fw4 gray mt0">{lastname}</h2>
  //   </div>
  // );
};

export default TrainerCard;
