import React from "react";

import Search from "./Search";
import Trainers from "./Trainers";

const Hero = ({ data }) => {
  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 ">
      <div className="max-w-xl mb-auto space-y-5">
        <Search />
      </div>
      <Trainers data={data} />
    </section>
  );
};

export default Hero;
