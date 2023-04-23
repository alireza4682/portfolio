import { useEffect, useState } from "react";
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
import { useInView } from "react-hook-inview";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const [landingRef, landingInView] = useInView({ threshold: 0.5 });
  const [mySkillsRef, mySkillsInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.5 });
  const [contactsRef, contactsInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (landingInView) setSelectedPage("home");
    if (mySkillsInView) setSelectedPage("skills");
    if (projectsInView) setSelectedPage("projects");
    if (testimonialsInView) setSelectedPage("testimonials");
    if (contactsInView) setSelectedPage("contacts");
  }, [
    landingInView,
    mySkillsInView,
    projectsInView,
    testimonialsInView,
    contactsInView,
  ]);

  return (
    <div className="bg">
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
        <MySkills ref={mySkillsRef} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Projects ref={projectsRef} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials ref={testimonialsRef} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contacts ref={contactsRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
