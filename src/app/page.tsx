import BackTop from "@/components/BackTop";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Information from "@/components/Information";
import NavBar from "@/components/NavBar";
import Servicios from "@/components/Servicios";
import SocialMediaButton from "@/components/SocialMediaButton";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/Carousel"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <Carousel/>
      <Gallery/>
      <Servicios/>
      <Information/>
      <Footer/>
      <SocialMediaButton/>
      <BackTop/>

    </main>
  )
}
