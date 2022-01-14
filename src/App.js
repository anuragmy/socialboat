import React, { useEffect, useState } from "react";
import axios from "axios";

import Loading from "./components/Loading";
import Search from "./components/Search";
import Trainers from "./components/Trainers";
import { API } from "./constants";
import TrainerVideos from "./components/trainerVideos";

const App = () => {
  const [trainers, setTrainers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [trainerName, setTrainerName] = useState("");

  useEffect(() => {
    const getTrainers = async () => {
      try {
        const res = await axios.get(API);
        if (res.data?.data) {
          const data = res.data?.data;
          // updating images
          const nd = data.map((item, i) => {
            let image = `https://placeimg.com/640/48${i}/people`;
            return { ...item, image };
          });
          setTrainers(nd);
          setFiltered(nd);
        }
      } catch (err) {
        console.log("err", err);
      }
    };
    getTrainers();
  }, []);

  const handleSearch = (value) => {
    let filterTrainer = [];
    if (value)
      filterTrainer = trainers.filter((item) =>
        item?.firstname.includes(value)
      );
    else filterTrainer = trainers;
    setFiltered(filterTrainer);
  };

  const selectedTrainer = (item) => setTrainerName(item);

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="p-4 m-w-5xl grid gap-4">
        {!trainers.length && <Loading />}
        <Search search={(val) => handleSearch(val)} />
        <Trainers
          data={filtered}
          selectedTrainer={(item) => selectedTrainer(item)}
        />
        <TrainerVideos name={trainerName} />
      </div>
    </div>
  );
};

export default App;
