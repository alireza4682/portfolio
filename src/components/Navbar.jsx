import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.png";
import closeIcon from "../assets/close-icon.png";

const navCategories = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
      hover:text-yellow-500 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const navebarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={` ${navebarBackground} "z-40 w-full fixed top-0 py-6"`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-Roboto text-3xl font-bold">JE</h4>
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-sans text-sm font-semibold">
            {navCategories.map((cat) => {
              <Link
                page={cat}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />;
            })}
          </div>
        ) : (
          <button
            className="rounded-full bg-rose-500 p-2"
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
          <div className="fixed right-0 bottom-0 h-full bg-blue-500 w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img
                  alt="close-icon"
                  src={closeIcon}
                  style={{ width: 32, height: 32 }}
                />
              </button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-blue-900">
              {navCategories.map((cat) => {
                <Link
                  page={cat}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />;
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
