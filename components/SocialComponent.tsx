import SocialIconComponent from "./SocialIconComponent";

export default function SocialComponent() {
    return (
        <div className='flex w-[100px] h-[20px] justify-between'>
            <SocialIconComponent iconType="instagram" iconSize="20px" styling={`fill-black hover:fill-orange cursor-pointer`}/>
            <SocialIconComponent iconType="facebook" iconSize="20px" styling={` fill-black hover:fill-orange cursor-pointer`}/>
            <SocialIconComponent iconType="twitter" iconSize="20px" styling={` fill-black hover:fill-orange cursor-pointer`}/>
        </div>
    )
}