import React from "react";
import { BeamButton } from "./ui/beamButton";
import PrimaryButton from "./ui/primaryButton";

function HeroPage() {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-full gap-0 bg-[#0000]">
      <BeamButton></BeamButton>
      <p className="bg-clip-text text-white leading-none my-20 text-[40px] lg:text-[80px] font-[600] text-center my-0 w-9/12">
      Custom ChatGPT for your website
      </p>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-2">
        <p className="w-[80vw] text-center lg:text-start lg:w-[25vw] text-[grey]">Visually create, publish, and scale the highest performance websites, without any limits.</p>
        <PrimaryButton text="Create Your GPT"></PrimaryButton>
      </div>
      

    </div>
    </>
  );
}

export default HeroPage;
