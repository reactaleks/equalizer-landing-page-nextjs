import CallToActionComponent from "@/components/CallToActionComponent";
import HeroComponent from "@/components/HeroComponent";
import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";
export default function Home() {
  return (
    <>
      <NavComponent />
      <main className="">
        <HeroComponent />
        <CallToActionComponent />
      </main>
      <FooterComponent />
    </>
  );
}
