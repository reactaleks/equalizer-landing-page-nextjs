"use client";

import LogoComponent from "./LogoComponent";
import SocialComponent from "./SocialComponent";

export default function FooterComponent() {
  return (
    <footer
      className={` w-[90%] xl:w-[80%] 2xl:w-[60%] h-[300px] mt-[400px] flex flex-col justify-around  py-6 mx-auto` }
    >
        <div className="h-[75%] flex flex-col justify-around">
          <LogoComponent />

          <p className="w-[75%]">
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at{" "}
            <span className="font-bold">equalizer@example.com</span>
          </p>
        </div>

        <div className="h-[25%] content-center md:content-center md:h-[75%]  ">
          <SocialComponent />
        </div>
    </footer>
  );
}
