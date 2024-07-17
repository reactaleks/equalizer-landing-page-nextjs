import ActionComponent from "./ActionComponent";
import Image from "next/image";

export default function CallToActionComponent() {
  return (
    <div className="z-10 h-[1024px] md:h-auto md:my-32 xl:my-48 flex flex-col justify-between md:justify-center clear-both z-10">
      <div className="w-full md:w-[696px] md:h-[600px] xl:w-[1110px] xl:h-[600px]  md:rounded-xl md:mx-auto bg-black  ">
        <div className="relative">
          <Image
            src="/assets/bg-pattern-3.svg"
            className="w-[280px] h-[420px] 
            md:w-[280px] md:h-[420px] 
            xl:w-[312px] xl:h-[468px]
            mx-auto md:mr-[25%] 
            xl:ml-[30%]"
            height={420}
            width={280}
            alt=""
          />
          <Image
            className="w-[208.97px] h-[430px] 
            md:w-[270.21px] md:h-[556px] 
            xl:w-[312px] xl:h-[642px] 
            absolute left-0 right-0 mx-auto -top-[15vh] 
            md:ml-16 md:-top-[30%]
            xl:ml-[10%] xl:-top-[50%]
            "
            src="/assets/illustration-app.png"
            height={1284}
            width={624}
            alt=""
          />
          <ActionComponent />
        </div>
      </div>
    </div>
  );
}
