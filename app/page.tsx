'use client'
import CallToActionComponent from "@/components/CallToActionComponent";
import HeroComponent from "@/components/HeroComponent";
import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";
import BackgroundPatternComponent from "@/components/BackgroundPatternComponent";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function Home() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)

    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return (
    <div  className="relative overflow-hidden">
      <BackgroundPatternComponent windowSize={width}/>
      <NavComponent />
      <main>
        <HeroComponent />
        <CallToActionComponent />
      </main>
      <FooterComponent/>
     </div>
  );
}
