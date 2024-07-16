import BtnComponent from "./BtnComponent";

export default function ActionComponent() {
  return (
    <div className="bg-orange z-10 h-[546px] 
    md:h-[546px] md:w-[60%] md:right-[10%] md:top-[30%]
    xl:w-[40%] xl:top-[10%] xl:h-[105%]
    
    w-full -bottom-[50%] rounded-3xl md:rounded-xl absolute flex flex-col justify-evenly">
      <div className="w-[80%] h-[80%] m-auto flex flex-col justify-around">
        <div>
          <h2 className="font-ibmBold text-white font-bold text-[32px] leading-[40px]">
            Premium EQ
          </h2>
          <p className="font-ibmRegular text-white text-[18px] leading-[28px]  ">
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
        </div>
        <div className="flex items-center w-[165px] h-[52px] justify-between ">
          <span className="font-ibmBold font-bold text-white text-[65px] leading-[52px]">
            $4
          </span>
          <span className="text-white text-body leading-[32px] tracking-[-0.2px]">
            /month
          </span>
        </div>
        <div className="">
          <BtnComponent
            btnIcon="/assets/icon-apple.svg"
            btnText="iOS Download"
            btnDark={true}
          />
          <BtnComponent
            btnIcon="/assets/icon-android.svg"
            btnText="Android Download"
            btnDark={false}
          />
        </div>
      </div>
    </div>
  );
}
