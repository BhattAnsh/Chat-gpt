import React from 'react'
import Image from 'next/image'
export function HeroImage() {
  return (
    <>
        <Image src = "/heroImage.jpg" alt='' width={1200} height={1000} className='w-[100vw] md:w-[60vw] relative mt-[-10px] md:mt-[-200px] z-1 rounded-md border-[1px] border-[grey] '></Image>
    </>
  )
}
