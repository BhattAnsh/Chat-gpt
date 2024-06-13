"use client"
import React from "react";
import NavBar from "./navbar";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import HeroPage from "./heroPage";
import BackgroundVideo from 'next-video/background-video';
import Video from 'next-video'
import styles from './styles/hero.module.css'


export function BackgroundGradientAnimationDemo() {
  return (
    <div className={styles.heroPageContainer}>
        <video src="/bgVideo.mp4" className={styles.backgroundVideo} autoPlay muted loop></video>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <NavBar></NavBar>
          <HeroPage></HeroPage>
        </div>
    </div>
  );
}
