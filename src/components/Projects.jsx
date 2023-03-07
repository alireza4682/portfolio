import LineGradient from "./LineGradient";
import { motion } from "framer-motion";

function getImageUrl(name) {
  return new URL(`../assets/${name}.jpeg`, import.meta.url).href;
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVarient = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, text }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const projectURL = getImageUrl(projectTitle);
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVarient} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-serif">{title}</p>
        <p className="mt-7 text-amber-700">{text}</p>
      </div>
      <img src={projectURL} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-serif font-semibold text-4xl ">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 font-caudex">
          few of projects I did in the past.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center  bg-red max-w-[600px] max-h-[600px]
                text-2xl font-serif font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
          <Project title="book store" text={"SPA Reactjs SASS"} />
          <Project title="e-commerce" text={"Nextjs TypeScript SASS GraphQL"} />

          <Project
            title="e-commerce2"
            text={"SPA Reactjs TypeScript SASS Redux-Saga Firebase"}
          />
          <Project
            title="DataMuse FrontEnd"
            text={"Reactjs TypeScript TailwindCSS Redux-toolkit"}
          />

          <div
            className="flex justify-center text-center items-center  bg-blue max-w-[600px] max-h-[600px]
                text-2xl font-serif font-semibold"
          >
            PACKED WITH LOTS OF FUNCTIONALITIES
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
