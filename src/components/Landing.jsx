import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profilePic from "../assets/profilePic.jpg";
import SocialMediaIcons from "./SocialMediaIcons";
import { forwardRef } from "react";

const Landing = forwardRef(function Landing({ setSelectedPage }, ref) {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
      ref={ref}
    >
      <div className=" basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px] before:rounded-b-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              src={profilePic}
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px] rounded-full"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src={profilePic}
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
          />
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="md:text-6xl text-4xl z-10 text-center md:text-start font-serif text-yellow font-semibold">
            Alireza
            <span
              className="relative text-pink-700 font-semibold z-20 
              "
            >
              <h2>Arezoumandan</h2>
            </span>
          </h1>
          <p className="mt-10  text-sm text-center md:text-start font-caudex first-letter:text-lg">
            I am a Frontend engineer with :
          </p>
          <p className="  text-sm text-center md:text-start font-caudex first-letter:text-lg">
            5+ years of experience in JavaScript and 3+ years of experience in
            Reactjs, TypeScript, Redux and RESTful APIs.
          </p>
          <p className="  text-sm text-center md:text-start font-caudex first-letter:text-lg">
            2+ years of experience working with Nextjs, GraphQl and MongoDB.
          </p>
          <p className="  text-sm text-center md:text-start font-caudex first-letter:text-lg">
            2+ years of experience working in cross functional environment 2+
            years of test driven development.
          </p>
          <p className=" mb-7 text-sm text-center md:text-start font-caudex first-letter:text-lg">
            1+ year of experience working with Nodejs and Expressjs
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainbow text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contacts")}
            href="#contacts"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contacts")}
            href="#contacts"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex 
            items-center justify-center font-serif px-10"
            >
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
});

export default Landing;
