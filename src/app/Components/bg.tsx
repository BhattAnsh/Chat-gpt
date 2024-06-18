"use client"
import React from "react";
import { Navbar } from "@/components/component/navbar";
import HeroPage from "./heroPage";
import styles from './styles/hero.module.css'


export function BackgroundGradientAnimationDemo() {
  return (
    <div className={styles.heroPageContainer}>
        <video src="/bgVideo.mp4" className={styles.backgroundVideo} autoPlay muted loop></video>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <Navbar></Navbar>
          <HeroPage></HeroPage>
        </div>
    </div>
  );
}
