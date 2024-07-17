import Image from "next/image";

interface PropTypes {
  windowSize: number;
}

export default function BackgroundPatternComponent({ windowSize }: PropTypes) {
  if (windowSize < 768) {
    return (
      <Image
        src={"/assets/bg-main-mobile.png"}
        width={582}
        height={780}
        alt=""
        className="w-[500px] h-[480px] absolute -top-[100px] -right-[120px] z-0"
      />
    );
  } else if (windowSize < 1024) {
    return (
      <>
        <Image
          src={"/assets/bg-main-tablet.png"}
          width={1283}
          height={1108}
          alt=""
          className=" absolute -top-[5%] -left-[10%] z-0"
        />
        <Image
          src={"/assets/bg-pattern-1.svg"}
          width={1283}
          height={1108}
          alt=""
          className="w-[266.67px] h-[400px] lg:w-[266.67px] lg:h-[400px] absolute -right-[0] -top-[25px] z-0"
        />
      </>
    );
  } else {
    return (
      <div className="z-0">

        <Image
          src={"/assets/bg-main-desktop.png"}
          width={1913}
          height={2058}
          alt=""
          className="absolute z-0 -top-[15%] -left-[0] "
          priority
        />
        <Image
          src={"/assets/bg-pattern-1.svg"}
          width={1283}
          height={1108}
          alt=""
          className="xl:w-[312px] xl:h-[468px] lg:w-[266.67px] lg:h-[400px] absolute -right-[0] -top-[25px] z-0"
        />
      </div>
    );
  }
}
