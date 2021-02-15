import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./footer.css";

function Footer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const imgpic = () => {
      for (var c = 0; c < 10; c++) {
        setCount(c);
        console.log(c);
        return (
          <AnimatePresence>
            <motion.img
              variants={imgBounce}
              initial="initial"
              animate="animate"
              src={`${count}.svg`}
              alt="code"
            />
          </AnimatePresence>
        );
      }
    };
  }, []);

  const imgBounce = {
    initial: {
      y: "0%",
      scale: 0.999,
    },
    animate: {
      y: "-10%",
      scale: 1.3,
      transition: {
        duration: 2,
        delay: 2,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const htags = (
    <AnimatePresence>
      <motion.img
        variants={imgBounce}
        initial="initial"
        animate="animate"
        src={`${count}.svg`}
        alt="code"
      />
    </AnimatePresence>
  );
  return (
    <footer>
      <h2>Languages I use</h2>;
      <div className="logo-icons">
        {htags}
        {/* <AnimatePresence>
          <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            src="2.svg"
          />
        </AnimatePresence> */}
        {/* <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            src="4.svg"
            alt="code"
          />
          <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            src="1.svg"
            alt="code"
          />
          <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            src="0.svg"
            alt="code"
          />
          <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            src="2.svg"
            alt="code"
          />
          <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            src="3.svg"
            alt="code"
          />
          <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            src="5.svg"
            alt="code"
          />
          <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            src="6.svg"
            alt="code"
          />
          <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            src="7.svg"
            alt="code"
          />
          <motion.img
            variants={imgBounce}
            initial="initial"
            animate="animate"
            transition="transition"
            src="9.svg"
            alt="code"
          /> */}
      </div>
      <div className="final-text">
        <h3>All Rights Reserved</h3>
        <p>©Copyrihgt 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
