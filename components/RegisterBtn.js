import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

const MainDiv = styled(motion.div)`
  position: absolute;
  top: 2%;
  right: 2%;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  border-radius: 10px;
`;
const BtnDiv = styled.button`
  background-color: transparent;
  border: none;
  padding: 2vh;
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
  }
`;

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.3,
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};
const RegisterBtn = () => {
  return (
    <Link href="/register" passHref>
      <MainDiv
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <BtnDiv>Authenticate</BtnDiv>
      </MainDiv>
    </Link>
  );
};

export default RegisterBtn;
