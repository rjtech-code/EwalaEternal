import { useState } from "react";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import GoldVein from "./components/GoldVein";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import WhoWeAre from "./sections/WhoWeAre";
import Ecosystem180 from "./sections/Ecosystem180";
import Services from "./sections/Services";
import Industries from "./sections/Industries";
import Exhibitions from "./sections/Exhibitions";
import EwalaEcosystemWheel from "./sections/EwalaEcosystemWheel";
import SuccessRoadmap from "./sections/SuccessRoadmap";
import Events from "./sections/Events";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useSmoothScroll();

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <GoldVein />
      <main className="relative z-10">
        <Hero />
        <WhoWeAre />
        <Ecosystem180 />
        <Services />
        <Industries />
        <Exhibitions />
        <EwalaEcosystemWheel />
        <SuccessRoadmap />
        <Events />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
