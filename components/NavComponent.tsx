import LogoComponent from "./LogoComponent"

export default function NavComponent() {
    return (
        <nav className=" w-[90%] xl:w-[80%] 2xl:w-[60%] h-[10vh] flex flex-col justify-around mx-auto">
            <LogoComponent/>
        </nav>

    )
}