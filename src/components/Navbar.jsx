import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import { useRef } from "react";
import useOnClickOutside from "../hooks/clickoutside";

const navCategories = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

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
      } z-40 fixed top-0 py-1`}
      ref={awayRef}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 fixed">
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
            className=" p-2 bg-sky-500 border-4  border-sky-400 rounded-full my-1   transition-all duration-500 z-10"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img
              alt="menu-icon"
              src={menuIcon}
              style={{ width: 24, height: 24 }}
            />
          </button>
        ) : (
          <button
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            className="p-2 my-1  bg-rose-500 border-4 border-rose-400 rounded-full  transition-all duration-500 z-10"
          >
            <img
              alt="close-icon"
              src={closeIcon}
              style={{ width: 24, height: 24 }}
            />
          </button>
        )}
        {!isAboveSmallScreen && (
          <div
            className={`fixed right-1 top-16 h-fit bg-stone-600/20 backdrop-blur-xl w-[200px] py-4 rounded-lg ${
              !isMenuToggled ? "scale-0 -translate-y-3/4" : "scale-100"
            } transition-all duration-300`}
          >
            <div
              className={`flex flex-col gap-5 items-center text-xl text-stone-500 font-serif h-full ${
                !isMenuToggled ? "-translate-y-3/4" : ""
              } transition-all duration-300  `}
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
