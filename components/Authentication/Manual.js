import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// styles
const MainDiv = styled.div`
  height: 5rem;
  width: 100%;
  margin-bottom: 3rem;
`;
const Hlpr = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  padding: 2vh;
  border-radius: 10px;
  width: 75%;
`;
const Hlpr2 = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Hdg = styled.div`
  font-size: 1.5em;
`;
const InpCnt = styled.input`
  background-color: transparent;
  padding: 1vh;
  outline: none;
  border: none;
  width: 100%;
  font-size: 1.2em;
`;
const ArwDiv = styled(motion.div)`
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

// framer motion
export const dropIn = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 2.3,
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  }
};
const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Manual = () => {
  return (
    <MainDiv>
      <Hlpr2>
        <Hlpr
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Hdg>Your Name</Hdg>
          <InpCnt placeholder="Please enter your name" />
        </Hlpr>
        <ArwDiv
          height="8vh"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <FaArrowRight size={20} />
        </ArwDiv>
      </Hlpr2>
    </MainDiv>
  );
};

export default Manual;
