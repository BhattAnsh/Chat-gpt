"use client"
import React from "react";
import { useState } from "react";
import Kabbas from "./kabbas";
import Image from "next/image";
import './styles/app.css'

const images = [
  "https://btrendy.co/wp-content/uploads/2024/06/leadgen-1.jpg.webp",
  "https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1.jpg.webp",
  "https://btrendy.co/wp-content/uploads/2024/06/customer-support-1.jpg.webp",
  "https://btrendy.co/wp-content/uploads/2024/06/legal-1.jpg.webp",
];

const descriptions = [
  "Streamline lead generation with AI-powered tools.",
  "Enhance shopping experiences with AI assistance.",
  "Provide top-notch customer service with AI support.",
  "Streamline legal research and drafting with efficient and knowledgeable AI chatbots.",
];
function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKabbasClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="app">
      <div className="content">
        <div className="left-column">
          <Kabbas
            title="Lead Generation"
            description={descriptions[0]}
            index={0}
            onClick={handleKabbasClick}
            isOpen={activeIndex === 0}
          />
          <Kabbas
            title="Shopping assistance"
            description={descriptions[1]}
            index={1}
            onClick={handleKabbasClick}
            isOpen={activeIndex === 1}
          />
          <Kabbas
            title="Customer service"
            description={descriptions[2]}
            index={2}
            onClick={handleKabbasClick}
            isOpen={activeIndex === 2}
          />
          <Kabbas
            title="Legal assistance"
            description={descriptions[3]}
            index={3}
            onClick={handleKabbasClick}
            isOpen={activeIndex === 3}
          />
        </div>
        <div className="right-column">
          {activeIndex !== null && (
            <Image src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} height={500} width={500} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
