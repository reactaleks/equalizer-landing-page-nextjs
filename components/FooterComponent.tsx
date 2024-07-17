"use client";

import LogoComponent from "./LogoComponent";
import SocialComponent from "./SocialComponent";

export default function FooterComponent() {
  return (
    <footer
      className={`z-10 w-[90%] xl:w-[80%] 2xl:w-[75%] h-[25vh] flex flex-col justify-around mx-auto md:flex-row md:items-center mb-24 md:mb-4`}
    >
      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between xl:w-[50%] z-10">
        <LogoComponent />

        <p className="w-[75%] md:w-[50%] xl:w-[60%] my-8 xl:my-0 z-10">
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at{" "}
          <span className="font-bold">equalizer@example.com</span>
        </p>
      </div>

      <div className="h-[25%] content-center md:content-center md:h-[75%] z-10 ">
        <SocialComponent />
      </div>
    </footer>
  );
}
