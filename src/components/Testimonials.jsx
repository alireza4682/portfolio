import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import yashar from "../assets/person-1.png";
import aslan from "../assets/person-2.png";

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
        justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="testimonials" className="pt-32 pb-16">
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-serif font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="w-1/3 mx-0 w-2/4" />
        <p className="mt-10 "></p>
      </motion.div>
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${testimonialStyles} `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="relative">
            <img
              src={aslan}
              alt="Aslan Mehrabi"
              className="rounded-full absolute -top-[300px]"
            />
            <p className="font-caudex text-6xl">"</p>
            <p className="text-justify text-md  font-caudex">
              Alireza is a collaborative team player. He is always willing to
              goes out of his way to help others understand complex concepts
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialStyles} `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="relative">
            <img
              src={yashar}
              alt="Yashar Kiarashi"
              className="rounded-full absolute -top-[240px]"
            />
            <p className=" text-6xl font-caudex">"</p>
            <p className=" text-md font-caudex text-justify">
              Alireza is a creative and analytical problem solver, always
              striving to find the most efficient solution. He is also a hard
              worker, consistently putting in the extra effort to ensure that
              his projects meet the highest standards.
            </p>
          </div>
        </motion.div>
        {/* <motion.div
          className={`bg-yellow ${testimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-serif text-6xl">"</p>
          <p className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            dolorem?
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
