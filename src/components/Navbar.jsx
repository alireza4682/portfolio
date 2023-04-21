import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import { useRef } from "react";
import useOnClickOutside from "../hooks/clickoutside";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
      hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const awayRef = useRef(null);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const navebarBackground = isTopOfPage ? "" : "bg-white/30 backdrop-blur-2xl ";

  useOnClickOutside(awayRef, () => {
    setIsMenuToggled(false);
  });

  return (
    <nav
      className={`${
        !isMenuToggled ? navebarBackground : ""
      } z-40 w-full fixed top-0 py-1 `}
      ref={awayRef}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-serif text-3xl font-bold text-yellow">
          A<span className="text-rose-400">A</span>
        </h4>
        {isAboveSmallScreen ? (
          <div
            className={`flex justify-between gap-16 font-sans text-sm font-semibold`}
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : !isMenuToggled ? (
          <button
            className=" p-1 bg-sky-200 rounded-xl my-1 shadow-xl shadow-sky-500/60 hover:bg-rose-200 hover:shadow-rose-200/60 transition-all duration-500 z-10"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img
              alt="menu-icon"
              src={menuIcon}
              style={{ width: 32, height: 32 }}
            />
          </button>
        ) : (
          <button
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            className="p-1 my-1  bg-rose-200 rounded-xl  shadow-xl shadow-rose-500/60 hover:bg-sky-200 hover:shadow-sky-200/60 transition-all duration-500 z-10"
          >
            <img
              alt="close-icon"
              src={closeIcon}
              style={{ width: 32, height: 32 }}
            />
          </button>
        )}
        {!isAboveSmallScreen && isMenuToggled && (
          <div className="fixed right-0 top-20 h-fit bg-blue/50 backdrop-blur-lg w-[300px] pb-12 rounded-bl-xl">
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-cyan-300 font-caudex h-full">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contacts"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
