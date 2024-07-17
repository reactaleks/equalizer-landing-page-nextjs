interface PropTypes {
  btnIcon: string;
  btnText: string;
  btnDark: boolean;
}

export default function BtnComponent({ btnIcon, btnText, btnDark }: PropTypes) {
  return (
    <div
      className={`w-full h-[61px] p-4 justify-center cursor-pointer flex ${
        btnDark
          ? `bg-black text-white hover:bg-teal`
          : `bg-white text-black hover:bg-lightorange`
      } rounded-xl first:mb-[2%]`}
    >
      <div className="flex justify-between items-center ">
        <img src={btnIcon} alt="" className="h-[20px] w-[17px] mr-4"/>
        <div className={`text-[18px] leading-[32px] tracking-[-0.18px] `}>
          {btnText}
        </div>
      </div>
    </div>
  );
}
