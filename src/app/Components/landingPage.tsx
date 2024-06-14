import React from 'react'
import { BackgroundGradientAnimationDemo } from './bg'
import { HeroImage } from './heroImage'
import { Marquee } from './marquee'
export function LandingPage() {
  return (
    <>
        <div className='bg-[transparent]'>
            <BackgroundGradientAnimationDemo></BackgroundGradientAnimationDemo>
            <div className='flex flex-row items-center justify-center bg-black'>
                <a href="#">
                    <HeroImage></HeroImage> 
                </a>
            </div>
            <div className='marequee bg-black flex flex-col items-center justify-center pb-10'>
                <h3 className='text-2xl text-[gray] mt-[150px]'>Simplify your workflow by integrating globally popular tools</h3>
                <Marquee></Marquee>
            </div>
        </div> 
    </>
  )
}

