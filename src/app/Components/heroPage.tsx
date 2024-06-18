import React from "react";
import { BeamButton } from "./ui/beamButton";
import PrimaryButton from "./ui/primaryButton";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Users } from "./users";
import { HeroImage } from "./heroImage";

function HeroPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-0 bg-[#0000]">
        <BeamButton></BeamButton>
        <p className="bg-clip-text text-white leading-none my-20 text-[40px] lg:text-[90px] font-[600] text-center my-0 w-[60vw]">
          Custom ChatGPT for your website
        </p>
        <div className="flex justify-center items-center flex-col lg:flex-row gap-2">
          <p className="w-[80vw] text-center lg:text-start lg:w-[20vw] text-[grey]">
            Visually create, publish, and scale the highest performance
            websites, without any limits.
          </p>
          <PrimaryButton url="#" text="Create Your GPT"></PrimaryButton>
        </div>
      </div>
      <center>
        <div>
          <br />
          <br />
        </div>
      </center>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
        <div className="flex flex-row items-center justify-center gap-5">
          <Button className="text-lg" variant="faded">
            APP SUMO
          </Button>
          <div className="flex flex-col justify-center items-center">
            <span className="text-lg">Rated 4.9</span>
            <div className="flex flex-row items-center justify-center gap-2">
              <Image src="/kid_start.svg" width={15} height={15} alt="" />
              <Image src="/kid_start.svg" width={15} height={15} alt="" />
              <Image src="/kid_start.svg" width={15} height={15} alt="" />
              <Image src="/kid_start.svg" width={15} height={15} alt="" />
              <Image src="/kid_start.svg" width={15} height={15} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Users></Users>
          <span className="text-lg text-grey">Trusted by <b>10,000+ users</b> </span>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
