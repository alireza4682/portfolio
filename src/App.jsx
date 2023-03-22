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
// import { useInView } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  // const inView1 = useInView(ref1);
  // const inView2 = useInView(ref1);
  // const inView3 = useInView(ref1);
  // const inView4 = useInView(ref1);
  // const inView5 = useInView(ref1);

  // const whatIsInView = () => {
  //   if (inView1) setSelectedPage("home");
  //   if (inView2) setSelectedPage("skills");
  //   if (inView3) setSelectedPage("projects");
  //   if (inView4) setSelectedPage("testimonials");
  //   if (inView5) setSelectedPage("contacts");
  //   console.log(selectedPage);
  // };

  // window.addEventListener("scroll", whatIsInView());

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
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full" ref={ref2}>
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto " ref={ref3}>
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full" ref={ref4}>
        <Testimonials />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full" ref={ref5}>
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
