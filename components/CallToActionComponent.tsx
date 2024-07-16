import ActionComponent from "./ActionComponent"
import Image from "next/image"


export default function CallToActionComponent() {
    return (
        <div className="w-full h-[600px] md:w-[95%] xl:w-[80%] 2xl:w-[60%] md:rounded-xl md:mx-auto  bg-black relative">
            <Image src="/assets/bg-pattern-3.svg" className="w-[75%] h-[65%] left-[13%] md:left-[7%] absolute" height={420} width={280} alt=""/>
            <Image className="w-[40%] h-[60%] absolute -top-[10%] left-[30%] md:w-[30%] md:h-[75%] md:left-[10%]  xl:w-[25%] xl:h-[90%] xl:-top-[25%]" src="/assets/illustration-app.png" height={1284} width={624} alt=""/>        
            <ActionComponent/>
        </div>
    )
}