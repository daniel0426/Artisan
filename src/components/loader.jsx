import React from "react";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="loadingImg1" />
        <ImageBlock variants={item} id="loadingImg2" />
        <motion.div variants={item} className="transitionImg">
          <motion.img layoutId="main-image-1" src="/images/loadingImg3.webp" />
        </motion.div>
        <ImageBlock variants={item} id="loadingImg4" />
        <ImageBlock variants={item} id="loadingImg5" />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div variants={variants} className={`image-block ${id}`}>
      <img src={`/images/${id}.webp`} alt="loaderImage" />
    </motion.div>
  );
};

export default Loader;
