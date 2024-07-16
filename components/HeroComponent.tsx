export default function HeroComponent() {
    return (
        <div className="z-1 w-[90%] h-[320px] flex flex-col xl:h-[200px] xl:w-[80%] 2xl:w-[60%] xl:mb-60 justify-between mx-auto mt-8 xl:mt-24 mb-36 z-5">
            <h1 className="font-ibmBold font-bold text-black text-[48px] xl:text-headingxl xl:leading-headingxl leading-[48px] tracking-[-0.45px] md:w-[65%] xl:w-[80%]">We make your music sound extraordinary.</h1>
            <p className="font-ibmRegular text-black xl:text-body xl:leading-body text-bodys leading-[26px] md:w-[65%]">A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
        </div>
    )
}