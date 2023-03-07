import LineGradient from "./LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImg from "../assets/skills2.png";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-serif font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 font-caudex">
            <span className="text-lg text-amber-200">Styling: </span>CSS, SASS,
            TailwindCSS<br></br>
            <span className="text-lg text-sky-400">Languages: </span>HTML,
            JavaScript, TypeScript, python <br></br>
            <span className="text-lg text-pink-400">Frontend tech: </span>{" "}
            Reactjs, Redux, Redux toolkit, Redux saga, Nextjs <br />
            <span className="text-lg text-orange-400">DB related: </span>{" "}
            GraphQL, PostgreSQL, MongoDB, Firebase, supabase <br />
            <span className="text-lg text-cyan-400">Testing: </span> Jest,
            Cypress, storybookjs <br />
            <span className="text-lg text-purple-400">Other: </span>
            Git, Github Actions, Docker, Nodejs, Expressjs, Passportjs
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1] before:rounded-2xl"
            >
              <img
                alt="skills"
                className="z-10 bg-fuchsia-200-200 p-10 rounded-2xl max-w-2xl bg-pink-50 shadow-lg shadow-pink-300"
                src={skillsImg}
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10  p-5 rounded-2xl max-w-xl  bg-pink-50 shadow-pink-300 shadow-lg"
              src={skillsImg}
            />
          )}
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-serif font-semibold text-5xl">01</p>
              <p className="font-caudex font-semibold text-3xl mt-3">
                Frontend engineer
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-caudex">
            Designed and developed efficient, scalable, and reusable frontend
            infrastructure, components, and accessible user interfaces following
            best engineering practices with lean/agile values & principles.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-serif font-semibold text-5xl">02</p>
              <p className="font-caudex font-semibold text-3xl mt-3">
                team experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-caudex">
            Worked collaboratively in an agile team with product owner, UX
            designer, and experienced engineers to turn business requirements
            into new features and a great user experience.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-serif font-semibold text-5xl">03</p>
              <p className="font-caudex font-semibold text-3xl mt-3">
                Computer Science
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-amber-300 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-caudex">
            experienced in using algorithms and data structures concepts to
            identify and break down problems <br /> An endless passion for
            solving complex problems and creating innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
