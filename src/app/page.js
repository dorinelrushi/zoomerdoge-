import About from "./components/About";
import CommingHereOne from "./components/Comming";
import CountdownTimer from "./components/Countdown";
import Galery from "./components/Galery";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Partner from "./components/Partner";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <HeroSection />
        <Partner />
        <About />
        <CommingHereOne />
        <Galery />
      </div>
    </div>
  );
}
