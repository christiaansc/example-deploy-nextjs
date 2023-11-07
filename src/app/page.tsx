import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import NavBar from "@/components/NavBar";
import Servicios from "@/components/Servicios";
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
      <Footer/>
    </main>
  )
}
