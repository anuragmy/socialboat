import React from "react";
import TrainerVideoCard from "./trainerVideoCard";
import VideoSkeleton from "./VideoSkeleton";

const TrainerVideos = ({ video }) => {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-1 place-items-center mt-16">
      {!video.length
        ? [1, 2].map((i) => <VideoSkeleton key={i} />)
        : video.map((item) => (
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
