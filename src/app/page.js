import About from "./components/About";
import CommingHereOne from "./components/Comming";

import Galery from "./components/Galery";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Partner from "./components/Partner";
import ZoomerDogeTimeline from "./components/Timeline";

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
        <ZoomerDogeTimeline />
      </div>
    </div>
  );
}
