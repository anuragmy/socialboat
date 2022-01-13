import axios from "axios";
import React, { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Loading from "./components/Loading";
import { API } from "./constants";

const App = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const getTrainers = async () => {
      try {
        const res = await axios.get(API);
        if (res.data?.data) {
          const data = res.data?.data;
          // updating images
          const nd = data.map((item, i) => {
            let image = `https://placeimg.com/640/48${i}/people`;
            console.log("🚀 ~ file: App.js ~ line 20 ~ data.map ~ img", image);
            return { ...item, image };
          });
          console.log("data", nd);
          setTrainers(nd);
        }
      } catch (err) {
        console.log("err", err);
      }
    };
    getTrainers();
  }, []);

  return (
    <div className="container my-10 mx-auto max-w-screen-lg">
      <main>
        {!trainers.length && <Loading />}
        <Hero data={trainers} />
      </main>
    </div>
  );
};

export default App;
