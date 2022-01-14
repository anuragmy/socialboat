import React from "react";
import TrainerCard from "./TrainerCard";

const Trainers = ({ data, selectedTrainer }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
      {data.map((item) => (
        <TrainerCard
          key={item.id}
          item={item}
          selectedTrainer={selectedTrainer}
        />
      ))}
    </div>
  );
};

export default Trainers;
