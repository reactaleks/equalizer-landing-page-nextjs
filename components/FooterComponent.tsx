"use client";

import LogoComponent from "./LogoComponent";
import SocialComponent from "./SocialComponent";


export default function FooterComponent() {

  return (
    <footer
      className={``}
    >
      <div className="col-span-4 col-start-2 row-span-1 row-start-3 ">
        <LogoComponent  />
      </div>
      <div className="col-span-10 col-start-2 row-span-2 row-start-6 md:col-span-4 md:row-start-3 md:col-start-5">
        <p>
          All rights reserved © Equalizer 2021
         Have any problems? Contact us via social media or email us at equalizer@example.com
        </p>
      </div>

      <div className="col-span-4 col-start-2 row-span-1 row-start-11 md:row-start-3 md:col-start-10 xl:col-start-11">
        <SocialComponent />
      </div>
    </footer>
  );
}
