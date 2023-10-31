import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import NavBar from "@/components/NavBar";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/Carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <Carousel/>
      <Gallery/>
      <Footer/>

    </main>
  )
}
