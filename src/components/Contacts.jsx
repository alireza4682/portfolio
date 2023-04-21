import LineGradient from "./LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { forwardRef, useRef, useState } from "react";
emailjs.init();

const Contacts = forwardRef(function Contacts(props, ref) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const [sent, setSent] = useState(false);

  const form = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vtwefxk",
        "template_yxsbc0q",
        form.current,
        "8YF-sP0NN7oLqa-0k"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contacts" className="py-48" ref={ref}>
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-serif font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2 " />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        ></motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form target="_blank" onSubmit={onSubmit} method="POST" ref={form}>
            <input
              className="w-full bg-amber-50 text-black font-semibold placeholder-amber-900 p-3 placeholder rounded-lg outline-none"
              type="text"
              placeholder="NAME"
              {...register("user_name", {
                required: true,
                maxLength: 100,
              })}
              name="user_name"
              id="user_name"
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is requiered."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-amber-50 text-black font-semibold placeholder-amber-900 p-3 mt-5  rounded-lg outline-none"
              type="text"
              placeholder="EMAIL"
              {...register("user_email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A_Z]{2,}$/i,
              })}
              name="user_email"
              id="user_email"
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is requiered."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-amber-50 text-black font-semibold placeholder-amber-900 p-3 mt-5  rounded-lg outline-none"
              type="text"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
              name="message"
              id="message"
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is requiered."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              type="submit"
              className="bg-sky-200 font-semibold text-sky-700 mt-5 hover:bg-rose-400 p-2 px-5 rounded-lg 
                        hover:text-rose-100 transition duration-500  shadow-lg shadow-sky-200/30 hover:shadow-rose-100/30"
              value="Send"
              disabled={sent}
            >
              SEND ME A MESSAGE
            </button>
          </form>
          <div>{`${sent ? "sent" : ""}`}</div>
        </motion.div>
      </div>
    </section>
  );
});
export default Contacts;
