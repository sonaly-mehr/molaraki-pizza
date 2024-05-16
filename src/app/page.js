import Hero from "./components/Hero";
import Map from "./components/Map";
import About from "./components/About";
import Dishes from "./components/Dishes";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu/Menu";
import Specialities from "./components/Specialities";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialities/>
      <Dishes />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Map />
    </>
  );
}
