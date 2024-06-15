import React from "react";
import { BackgroundGradientAnimationDemo } from "./bg";
import { HeroImage } from "./heroImage";
import { Marquee } from "./marquee";
import { CardStack } from "./Cards";
import { BentoGridFinal } from "./BentoGrid";
import { SpeedTabs } from "./speedSection";
import Image from "next/image";
import Styles from "./styles/hero.module.css";
import Card from "./ui/card";
import PrimaryButton from "./ui/primaryButton";
import Testimonial from "./ui/testimonial";
import Footer from "./ui/footer";

export function LandingPage() {
  return (
    <>
      <div className="bg-[transparent]">
        <BackgroundGradientAnimationDemo></BackgroundGradientAnimationDemo>
        <div className="flex flex-row items-center justify-center bg-black mt-[50px]">
          <a href="#">
            <HeroImage></HeroImage>
          </a>
        </div>
        <div className="marequee bg-black flex flex-col items-center justify-center pb-10">
          <h3 className="text-center text-xl lg:text-2xl text-[gray] mt-[30px] lg:mt-[150px]">
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
            <h1 className="text-[40px] lg:text-[70px] w-[90vw] lg:w-[60vw] text-center font-bold leading-tight">
              Truly unlimited no-code tool with features that matter
            </h1>
            <br />
            <h4 className="w-[90vw] lg:w-[50vw] text-[gray] text-center">
              We’re not just focused on building features - we’re focused on
              removing the barriers so you can do whatever you want, however you
              want. If it can be coded, it can be built in Divhunt.
            </h4>
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
        <section id="horizon-section" className={Styles.t2242}>
          <div className={Styles.t2243}>
            <div className={Styles.t2244}>
              <div className={Styles.t2245}></div>
              <div className={Styles.t2246}></div>
            </div>
            <div className={Styles.t2250}></div>
            <div
              id="horizon-div"
              className={Styles.t2247}
            >
              <div className={Styles.t2249}></div>
              <div className={Styles.t2248}></div>
            </div>
          </div>
        </section>
        <center>
          <section className="mt-[300px] md:mt-[400px]">
            <div className="heading flex flex-col gap-10 md:gap-0 md:flex-row w-[100vw] md:w-[70vw] m-[10px] p-[10px] md:m-[100px] relative z-[100]">
              <div className="flex flex-col w-[100%] md:w-[50%] gap-10">
                <h1 className="text-center md:text-start text-5xl font-[600]">Everything you need to get started</h1>
                <p className="text-center md:text-start text-[gray]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores inventore, minus blanditiis eum aut tempore iure ex beatae voluptate voluptatibus. Et hic molestiae excepturi distinctio. Recusandae saepe maxime illum cumque?</p>
              </div>
              <div className="flex flex-col justify-end items-center md:items-end w-[100%] md:w-[50%]">
                <PrimaryButton text="Get Started Free"></PrimaryButton>
              </div>
            </div>
            <Card></Card>
          </section>
        </center>
        <div className="flex flex-col items-center justify-center mt-[100px]">
          <Image
            src="/commentsSVG.svg"
            alt=""
            width={600}
            height={600}
            className=""
          />
          <div className="heading">
            <h1 className=" text-5xl md:text-7xl font-bold text-center mt-50px md:mt-20px w-[90vw] md:w-[40vw] leading-snug">What community says about us</h1>
          </div>
          <div className="flex items-center justify-center w-full mt-[100px]">
            <Testimonial></Testimonial>
          </div>
        </div>
        <div className="w-full flex justify-center align-center mt-[100px]">
          <Footer></Footer>
        </div>
        <br />
      </div>
    </>
  );
}
