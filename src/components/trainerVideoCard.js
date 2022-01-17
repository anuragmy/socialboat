import React from "react";

const TrainerVideoCard = ({ id, title }) => {
  const videoSrc = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="cursor-move	">
      <div className="w-full bg-[#20354b] rounded-2xl p-8 shadow-2xl ">
        <div>
          <div className="mt-6 w-fit">
            <iframe
              src={videoSrc}
              title={title}
              style={{ width: "-webkit-fill-available", height: 300 }}
            />
          </div>

          <div className="mt-8 ">
            <h2 className="text-white font-bold text-lg tracking-wide">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerVideoCard;
