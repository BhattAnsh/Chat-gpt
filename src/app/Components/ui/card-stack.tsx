"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStackMenu = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);


  return (
    <div className="relative flex align-center justify-center h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-[65vh] md:w-[70vw] rounded-3xl p-10 shadow-xl border border-neutral-200 dark:border-[#8F78F1]/[0.3]  shadow-[#8F78F1]/[0.1] dark:shadow-[#8F78F1]/[0.15] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          > 
            <Button className="w-[200px] bg-[transparent] border border-[1px] border-[#8F78F1] shadow-[#8F78F1]/[0.15]">Our Misson</Button>
            <h1 className="font-bolder text-7xl w-[60%]">Creating a better & more accessible web design for everyone.</h1>
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
