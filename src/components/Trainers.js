import React from "react";
import TrainerCard from "./TrainerCard";

const Trainers = ({ data, selectedTrainer }) => {
  return (
    <div>
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
