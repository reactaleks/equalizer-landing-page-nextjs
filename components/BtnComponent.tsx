
interface PropTypes {
    btnIcon: string;
    btnText: string;
    btnDark: boolean
}

export default function BtnComponent({btnIcon, btnText, btnDark}:PropTypes) {
    return (
        <div className="">
            <div><img src={btnIcon} alt="" /></div>
            <div className={`text-[18px] leading-[32px] tracking-[-0.18px] ${btnDark ? `bg-black text-white hover:bg-teal` : `bg-white text-black hover:bg-lightorange`}`}>{btnText}</div>
        </div>
    )
}