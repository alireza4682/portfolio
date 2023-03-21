import { useEffect, useRef, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import useIsInViewport from "./hooks/inViewPort";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const landingRef = useRef(null);
  const isLandingInView = useIsInViewport(landingRef);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} ref={landingRef} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;

//TODO:
//1-fix Pic and aboveaverage always false
//2-choose a color pallete
//3-fix contact not anchored
