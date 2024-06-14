"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Marquee() {
  return (
    <div className="p-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    id:"1",
    location:"/vimeo.png"
  },
  {
    id:"2",
    location:"/hub.png"
  },
  {
    id:"3",
    location:"/lottie.png"
  },
  {
    id:"4",
    location:"/mailchimp.png"
  },
  {
    id:"5",
    location:"/strapi.png"
  },
];
