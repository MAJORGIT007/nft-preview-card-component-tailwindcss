import { useState } from "react";
import nft from "./assets/image-equilibrium.jpg";
import ethicon from "./assets/icon-ethereum.svg";
import clockicon from "./assets/icon-clock.svg";
import avatar from "./assets/image-avatar.png";
import viewicon from "./assets/icon-view.svg";

function App() {
  return (
    <main className="w-[327px] md:w-[350px] h-[543px] md:h-[596px] bg-carddarkblue rounded-[15px] p-6">
      <div className="relative">
        <div
          alt="nft"
          className="bg-nft w-full h-[278px] md:h-[302px] bg-contain rounded-[8px] mb-6"
        />
        <div className="absolute opacity-0 hover:opacity-100 top-0 w-full h-[278px] md:h-[302px] bg-contain rounded-[8px] justify-center items-center mb-6 hover:flex  hover:cursor-pointer hover:bg-cyan/50 ">
          <img src={viewicon} alt="view icon" className="" />
        </div>
      </div>
      <h1 className="Heading text-white mb-3 md:mb-4 hover:text-cyan hover:cursor-pointer">
        Equilibrium #3429
      </h1>
      <p className="Body text-softblue mb-4 md:mb-6">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between mb-4 md:mb-6">
        <div className="flex">
          <img src={ethicon} alt="eth icon" className="mr-[6.48px]" />
          <h2 className="font-outfit font-semibold text-cyan text-[15px] leading-[19px]">
            0.041 ETH
          </h2>
        </div>
        <div className="flex">
          <img src={clockicon} alt="clock icon" className="mr-[7.7px]" />
          <p className="font-outfit text-softblue text-[15px] leading-[19px]">
            3 days left
          </p>
        </div>
      </div>
      <div className="bg-linedarkblue h-[1px] mb-4" />
      <div className="flex items-center">
        <img
          src={avatar}
          alt="avatar"
          className="w-[33px] h-[33px] border border-white rounded-full mr-4"
        />
        <p className="text-outfit text-softblue text-[15px] leading-[ 19px] mr-[5px]">
          Creation of
        </p>
        <p className="text-outfit text-white text-[15px] leading-[19px] hover:text-cyan hover:cursor-pointer">
          Jules Wyvern
        </p>
      </div>
    </main>
  );
}

export default App;
