import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import axios from "axios";
import Video from "./apis/video";
import Search from "./components/Search";
import Trainers from "./components/Trainers";
import { API } from "./constants";
import TrainerVideos from "./components/trainerVideos";
import { KEY } from "./apis/video";

const App = () => {
  const [trainers, setTrainers] = useState([]);
  const [showBack, setShowBack] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [video, setVideos] = useState([]);
  const [trainerName, setTrainerName] = useState("");

  const handleShowTrainers = () => {
    setTrainerName("");
    setVideos([]);
    setShowBack(false);
  };

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
      filterTrainer = trainers.filter(
        (item) =>
          item?.firstname.toLowerCase().includes(value.toLowerCase()) ||
          item?.lastname.toLowerCase().includes(value.toLowerCase())
      );
    filterTrainer = trainers;
    setFiltered(filterTrainer);
  };

  const getVideos = async () => {
    const response = await Video.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: trainerName,
      },
    });
    if (response) {
      const videos = response.data.items.filter((item) => item.id.videoId);
      setVideos(videos);
    }
  };
  const selectedTrainer = (item, type) => {
    if (type === "home") {
      setTrainerName(item);

      setShowBack(true);
      getVideos();
    } else {
    }
  };

  return (
    <div>
      <div className="grid place-items-center min-h-screen">
        <div className="p-4 m-w-5xl grid gap-4">
          <Search search={(val) => handleSearch(val)} />
        </div>
      </div>

      <div className="p-4">
        <Container>
          {trainerName ? (
            <TrainerVideos video={video} />
          ) : (
            <Trainers
              data={filtered}
              selectedTrainer={(item) => selectedTrainer(item, "home")}
            />
          )}
        </Container>

        {showBack && (
          <button
            className="absolute w-16 top-4 left-64 rounded-2xl p-4 bg-blue-500 text-white  hover:bg-blue-300 m-2"
            onClick={handleShowTrainers}
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
