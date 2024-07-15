import BtnComponent from "./BtnComponent"



export default function ActionComponent() {
    return (
        <div className="bg-orange h-[546px] w-full absolute">
            <h2 className="text-[32px] leading-[40px]">Premium EQ</h2>
            <p className="text-[18px] leading-[28px]">Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
            <div className="">
                <span className="text-[65px] leading-[52px]">$4</span>
                <span className="text-body leading-[32px] tracking-[-0.2px]">/month</span>
            </div>
            <div>
                <BtnComponent btnIcon="/assets/icon-apple.svg" btnText="iOS Download" btnDark={true}/>
                <BtnComponent btnIcon="/assets/icon-android.svg" btnText="Android Download" btnDark={false}/>
            </div>
        </div>
    )
}