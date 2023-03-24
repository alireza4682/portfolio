import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.png";
import closeIcon from "../assets/close-icon.png";
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
  const navebarBackground = isTopOfPage ? "" : "bg-gray-600/90 ";

  useOnClickOutside(awayRef, () => {
    setIsMenuToggled(false);
  });

  return (
    <nav className={`${navebarBackground} z-40 w-full fixed top-0 py-1 `}>
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
        ) : (
          <button
            className=" p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img
              alt="menu-icon"
              src={menuIcon}
              style={{ width: 32, height: 32 }}
            />
          </button>
        )}
        {!isAboveSmallScreen && isMenuToggled && (
          <div
            className="fixed right-0 top-0 h-full bg-blue/50 backdrop-blur-lg w-[300px]"
            ref={awayRef}
          >
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img
                  alt="close-icon"
                  src={closeIcon}
                  style={{ width: 32, height: 32 }}
                />
              </button>
            </div>
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
