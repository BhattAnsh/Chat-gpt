import React from 'react'
import { BackgroundGradientAnimationDemo } from './bg'
import { HeroImage } from './heroImage'
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
        </div> 
    </>
  )
}

