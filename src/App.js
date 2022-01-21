import React, { useEffect, useState } from "react";
import axios from "axios";
import Video from "./apis/video";
import Search from "./components/Search";
import Trainers from "./components/Trainers";
import { API, IMAGE_API } from "./constants";
import TrainerVideos from "./components/trainerVideos";
import { KEY } from "./apis/video";

const App = () => {
  const [trainers, setTrainers] = useState([]);
  const [showBack, setShowBack] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [video, setVideos] = useState([]);
  const [trainerName, setTrainerName] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoSearch, setVideoSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const handleShowTrainers = () => {
    setTrainerName("");
    setVideos([]);
    setShowBack(false);
    setSearchVal("");
  };

  useEffect(() => {
    const getTrainers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API);
        if (res.data) {
          const data = res.data;
          // updating images
          const nd = data.map((item, i) => {
            let image = IMAGE_API(i);
            return { ...item, image };
          });
          setTrainers(nd);
          setFiltered(nd);
          setLoading(false);
        }
      } catch (err) {
        console.log("err", err);
        setLoading(false);
      }
    };
    getTrainers();
  }, []);

  const handleSearch = (value) => {
    let filterTrainer = [];
    if (video.length) {
      setVideoSearch(true);
      if (value) {
        setSearchVal(value);
        filterTrainer = video.filter((item) =>
          item?.snippet?.title?.toLowerCase().includes(value.toLowerCase())
        );
      } else filterTrainer = video;
      setFiltered(filterTrainer);
    } else {
      setVideoSearch(false);
      if (value)
        filterTrainer = trainers.filter((item) =>
          item?.name.toLowerCase().includes(value.toLowerCase())
        );
      else filterTrainer = trainers;
      setFiltered(filterTrainer);
    }
  };

  const getVideos = async (item) => {
    setLoading(true);
    const response = await Video.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: item,
      },
    });
    if (response) {
      const videos = response.data.items.filter((item) => item.id.videoId);
      setVideos(videos);
      setLoading(false);
    } else setLoading(false);
  };
  const selectedTrainer = (item, type) => {
    if (type === "home") {
      setTrainerName(item);

      setShowBack(true);
      getVideos(item);
    } else {
    }
  };

  return (
    <div>
      <div className="grid place-items-center min-h-screen">
        <div className="p-4 m-w-5xl ">
          <Search search={(val) => handleSearch(val)} />
        </div>
        {showBack && (
          <>
            <button
              className=" w-16  rounded-2xl p-4 bg-blue-500 text-white  hover:bg-blue-300 m-2"
              onClick={handleShowTrainers}
            >
              Back
            </button>
            <div className="my-4">
              <p>(drag to reposition)</p>
            </div>
          </>
        )}
      </div>

      <div className="p-4">
        {trainerName ? (
          <TrainerVideos
            video={videoSearch ? filtered : video}
            loading={loading}
          />
        ) : (
          <Trainers
            loading={loading}
            data={filtered}
            selectedTrainer={(item) => selectedTrainer(item, "home")}
          />
        )}
      </div>
    </div>
  );
};

export default App;
