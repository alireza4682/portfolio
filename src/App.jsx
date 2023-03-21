import { useEffect, useRef, useState } from "react";
import Contacts from "./components/Contacts";
import DotGroup from "./components/DotGroup";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const landingRef = useRef(null);
  const isLandingInView = useIsInViewport(landingRef);

  const skillRef = useRef(null);
  const isSkillInView = useIsInViewport(skillRef);

  const projectRef = useRef(null);
  const isProjectInview = useIsInViewport(projectRef);

  const testimonialRef = useRef(null);
  const isTestimonialInView = useIsInViewport(testimonialRef);

  const contactRef = useRef(null);
  const isContactInView = useIsInViewport(contactRef);

  const whatInViewport = isLandingInView
    ? landingRef
    : isSkillInView
    ? skillRef
    : isProjectInview
    ? projectRef
    : isTestimonialInView
    ? testimonialRef
    : isContactInView
    ? contactRef
    : landingRef;

  useEffect(() => {
    setSelectedPage(whatInViewport);
  }, [whatInViewport]);

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
        <MySkills ref={skillRef} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Projects ref={projectRef} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials ref={testimonialRef} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contacts ref={contactRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
