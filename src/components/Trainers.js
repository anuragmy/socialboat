import React from "react";
import TrainerCard from "./TrainerCard";

const Trainers = ({ data }) => {
  return (
    <div className="grid-rows-1">
      {data.map((item) => (
        <TrainerCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Trainers;
