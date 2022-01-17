import React from "react";
import TrainerCard from "./TrainerCard";
import Skeleton from "./Skeleton";

const Trainers = ({ data, selectedTrainer, loading }) => {
  return (
    <div>
      <div className="grid gap-2 place-items-start	 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {loading
          ? [1, 2, 3, 4].map((i) => <Skeleton key={i} />)
          : data.map((item) => (
              <TrainerCard
                key={item.id}
                item={item}
                selectedTrainer={selectedTrainer}
              />
            ))}
      </div>
    </div>
  );
};

export default Trainers;
