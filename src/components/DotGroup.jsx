import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow  transition delay-500 duration-100 animate-ping`;

  const navCategories = [
    "home",
    "skills",
    "projects",
    "testimonials",
    "contact",
  ];

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {navCategories.map((cat) => {
        <AnchorLink
          className={`${selectedPage === cat ? selectedStyles : "bg-gray-500"}
            w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-gray-500"
        }
            w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-gray-500"
        }
            w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-gray-500"
        }
            w-3 h-3 rounded-full`}
        href="#testimonials"
        onClick={() => setSelectedPage("testimonials")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contacts" ? selectedStyles : "bg-gray-500"
        }
            w-3 h-3 rounded-full`}
        href="#contacts"
        onClick={() => setSelectedPage("contacts")}
      />
    </div>
  );
};

export default DotGroup;
