import styled from "styled-components";
import { motion } from "framer-motion";

// styles
const MainDiv = styled(motion.div)`
  position: absolute;
  width: 3.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-around;
  top: 50%;
`;
const Span = styled(motion.span)`
  display: block;
  height: 0.8rem;
  width: 0.8rem;
  background-color: black;
  border-radius: 0.4rem;
`;

// framer motion
const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <MainDiv variants={loadingContainerVariants} initial="start" animate="end">
      <Span
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></Span>
      <Span
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></Span>
      <Span
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></Span>
    </MainDiv>
  );
};

export default Loader;
