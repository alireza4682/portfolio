import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow-500 before:absolute before:w-6 before:h-6 
  before:rounded-full before:border-2 before:border-yellow-500 before:left-[-50%] 
  before:top-[-50%]`;

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
          href={`#${cat}`}
          onClick={() => setSelectedPage(cat)}
        />;
      })}
    </div>
  );
};

export default DotGroup;
