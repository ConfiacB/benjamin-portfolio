import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "8rem",
  height: "8rem",
  display: "flex",
  justifyContent: "space-around",
};
const loadingCircle = {
  display: "block",
  width: "2rem",
  height: "2rem",
  backgroundColor: "#3A36DB",
  borderRadius: "1rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration : 0.4,
  yoyo : Infinity,
  ease: 'easeInOut'
}

const Loader = () => {
  return (
    <div>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
