import React from "react";

const TrainerVideoCard = ({ id, title }) => {
  const videoSrc = `https://www.youtube.com/embed/${id}`;

  return (
    <div>
      <iframe src={videoSrc} title={title} />
    </div>
  );
};

export default TrainerVideoCard;
