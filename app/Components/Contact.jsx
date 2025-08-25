import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage("Email sent successfully!");
    setMessageVisible(true);

    setTimeout(() => {
      setMessageVisible(false);
      setMessage("");
    }, 3000);

    const formData = new FormData(event.target);
    formData.append("access_key", "192b8bfc-64eb-4a6c-b9f2-1e082c010a38");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setMessage("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setMessage(data.message);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
        w-full px-[12%] py-16 scroll-mt-20
        bg-[url(/assets/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]
        dark:bg-none
        text-slate-900 dark:text-slate-100
      "
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-base md:text-lg font-serif text-slate-700 dark:text-slate-300"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-serif"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-slate-700 dark:text-slate-300 font-serif"
      >
        I'd love to hear from you! If you have any questions, comments, or feedback,
        please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-8">
          <label htmlFor="name" className="sr-only">Name</label>
          <motion.input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="
              flex-1 p-3 rounded-md
              border border-slate-300 dark:border-slate-600
              bg-white dark:bg-neutral-900
              text-slate-900 dark:text-slate-100
              placeholder:text-slate-500 dark:placeholder:text-slate-400
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-sky-500 dark:focus-visible:ring-sky-400
            "
          />

          <label htmlFor="email" className="sr-only">Email</label>
          <motion.input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="
              flex-1 p-3 rounded-md
              border border-slate-300 dark:border-slate-600
              bg-white dark:bg-neutral-900
              text-slate-900 dark:text-slate-100
              placeholder:text-slate-500 dark:placeholder:text-slate-400
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-sky-500 dark:focus-visible:ring-sky-400
            "
          />
        </div>

        <label htmlFor="message" className="sr-only">Message</label>
        <motion.textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Enter your message"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="
            w-full p-4 rounded-md mb-6
            border border-slate-300 dark:border-slate-600
            bg-white dark:bg-neutral-900
            text-slate-900 dark:text-slate-100
            placeholder:text-slate-500 dark:placeholder:text-slate-400
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-sky-500 dark:focus-visible:ring-sky-400
          "
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="
            py-3 px-8 w-max mx-auto flex items-center gap-2 rounded-full
            bg-sky-600 hover:bg-sky-500 text-white
            dark:bg-sky-500 dark:hover:bg-sky-400
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-offset-2 focus-visible:ring-sky-500
            dark:focus-visible:ring-offset-neutral-900
          "
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
      </motion.form>

      {messageVisible && (
        <p
          role="status"
          aria-live="polite"
          className="
            mt-4 mx-auto w-fit px-4 py-2 rounded border
            bg-emerald-100 text-emerald-800 border-emerald-300
            dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700
          "
        >
          {message}
        </p>
      )}
    </motion.section>
  );
};

export default Contact;
