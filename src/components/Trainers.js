import React from "react";
import TrainerCard from "./TrainerCard";
import Skeleton from "./Skeleton";
import { Grid } from "@material-ui/core";

const Trainers = ({ data, selectedTrainer, loading }) => {
  return (
    <Grid container spacing={2}>
      {/* <div className="grid gap-2 place-items-start	 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1"> */}
      {loading
        ? [1, 2, 3].map((i) => (
            <Grid item xs={12} md={3} lg={4} key={i}>
              <Skeleton key={i} />
            </Grid>
          ))
        : data.map((item) => (
            <Grid item xs={12} sm={6} md={3} lg={4} key={item.id}>
              <TrainerCard
                key={item.id}
                item={item}
                selectedTrainer={selectedTrainer}
              />
            </Grid>
          ))}
    </Grid>
  );
};

export default Trainers;
