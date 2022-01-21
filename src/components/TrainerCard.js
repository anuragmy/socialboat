import React from "react";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";

const TrainerCard = ({ item: { name, image, email }, selectedTrainer }) => {
  return (
    <div
      className="w-72  
      max-h-80
      bg-gray-500
       rounded-2xl p-8 grow shadow-2xl cursor-pointer
     
      "
      style={{ margin: "0 auto" }}
      onClick={() => selectedTrainer(name)}
    >
      <div>
        <div className="tc ">
          <img
            src={image}
            alt={image}
            className="br-100 h4 w4 dib ba b--black-05 pa2"
            title="Photo of a kitty staring at you"
          />
          <h1 className="f3 mb2">{name} </h1>
          <h2 className="f5 fw4 gray mt0">{email}</h2>
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
