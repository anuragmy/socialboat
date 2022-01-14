import React from "react";
import Search from "./Search";
import TrainerVideoCard from "./trainerVideoCard";

const TrainerVideos = ({ video }) => {
  return (
    <div>
      {video.map((item) => (
        <TrainerVideoCard
          key={item.etag}
          id={item.id.videoId}
          title={item.snippet.title}
        />
      ))}
    </div>
  );
};

export default TrainerVideos;
