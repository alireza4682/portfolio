import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import yashar from "../assets/person-1.png";
import aslan from "../assets/person-2.png";
import { forwardRef } from "react";

const Testimonials = forwardRef(function Testimonials(props, ref) {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
        justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="testimonials" className="pt-32 pb-16" ref={ref}>
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
          className={`bg-cyan-600 ${testimonialStyles} rounded-xl shadow-cyan-600/50 shadow-lg`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="relative top-[60px]">
            <a href="https://www.linkedin.com/in/aslan-mehrabi/">
              <img
                src={aslan}
                alt="Aslan Mehrabi"
                className="rounded-full absolute -top-[330px] border-8 border-cyan-800 shadow-2xl w-[300px]"
              />
            </a>
            <p className="font-secular text-6xl font-extrabold absolute -top-[100px]">
              "
            </p>
            <p className="text-ellipsis text-md  font-caudex relative -top-[40px]">
              Alireza is a team player and always willing to take on different
              roles and responsibilities in order to help the team reach their
              goals. his excellent communication skills make collaborating with
              him an absolute breeze.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`bg-rose-600 ${testimonialStyles} rounded-xl shadow-rose-600/50 shadow-lg`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="relative top-[60px]">
            <a href="https://www.linkedin.com/in/yashar-kiarashinejad/">
              <img
                src={yashar}
                alt="Yashar Kiarashi"
                className="rounded-full absolute -top-[330px] border-8 border-rose-900 shadow-2xl w-[300px]"
              />
            </a>
            <p className=" text-6xl font-secular font-extrabold absolute -top-[100px]">
              "
            </p>
            <p className=" text-md font-caudex text-justify relative -top-[40px]">
              Alireza is a creative and analytical problem solver, always
              striving to find the most efficient solution. He is also a hard
              worker, consistently putting in the extra effort to ensure that
              his projects meet the highest standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Testimonials;
