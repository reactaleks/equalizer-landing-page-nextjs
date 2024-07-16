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
        className="w-[500px] h-[480px] absolute -top-[100px] -right-[120px]"
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
          className="w-[1283px] h-[1000px] absolute -top-[200px] -left-[150px] z-1"
        />
        <Image
          src={"/assets/bg-pattern-1.svg"}
          width={1283}
          height={1108}
          alt=""
          className="w-[230px] h-[350px] absolute -right-[25px] -top-[25px] z-2"
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
          className="absolute "
          priority
        />
        <Image
          src={"/assets/bg-pattern-1.svg"}
          width={1283}
          height={1108}
          alt=""
          className="w-[230px] h-[350px] xl:w-[15%] xl:h-[20%] absolute -right-[25px] -top-[25px] z-2"
        />
      </div>
    );
  }
}
