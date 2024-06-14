import React from "react";
import { BackgroundGradientAnimationDemo } from "./bg";
import { HeroImage } from "./heroImage";
import { Marquee } from "./marquee";
import { CardStack } from "./Cards";
import { BentoGridFinal } from "./BentoGrid";
import { SpeedTabs } from "./speedSection";
import Image from "next/image";
export function LandingPage() {
  return (
    <>
      <div className="bg-[transparent]">
        <BackgroundGradientAnimationDemo></BackgroundGradientAnimationDemo>
        <div className="flex flex-row items-center justify-center bg-black">
          <a href="#">
            <HeroImage></HeroImage>
          </a>
        </div>
        <div className="marequee bg-black flex flex-col items-center justify-center pb-10">
          <h3 className="text-2xl text-[gray] mt-[150px]">
            Simplify your workflow by integrating globally popular tools
          </h3>
          <Marquee></Marquee>
        </div>
        <div className="bg-black mt-[-200px]">
          <CardStack></CardStack>
        </div>
        <div className="flex flex-row items-center justify-center mt-[300px]">
          <div className="">
            <Image
              src="/shineSVG.svg"
              alt=""
              width={600}
              height={600}
              className=""
            />
        </div>
        </div>
        <br />
        <br />

        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[70px] w-[60vw] text-center font-bold leading-tight">Truly unlimited no-code tool with features that matter</h1>
                <br />
                <h4 className="w-[50vw] text-[gray] text-center">We’re not just focused on building features - we’re focused on removing the barriers so you can do whatever you want, however you want. If it can be coded, it can be built in Divhunt.</h4>
            </div>
            <br />
            <br />
            <BentoGridFinal></BentoGridFinal>
        </div>
        <div className="flex flex-col items-center justify-center mt-[100px]">
        <Image
              src="/speedSVG.svg"
              alt=""
              width={600}
              height={600}
              className=""
            />
        <SpeedTabs></SpeedTabs>
        </div>
        <br />

      </div>
    </>
  );
}
