import LogoComponent from "./LogoComponent"

export default function NavComponent() {
    return (
        <nav className=" w-[90%] xl:w-[80%] 2xl:w-[60%] h-[100px]  flex flex-col justify-around py-6 mx-auto">
            <LogoComponent/>
        </nav>

    )
}