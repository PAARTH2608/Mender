import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

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
const Button = (props) => {
  return (
    <Link href={props.attr ? '/404' : '/'} passHref>
      <ArwDiv
        height="8vh"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        {props.attr ? <FaArrowRight size={20} /> : <FaArrowLeft size={20} />}
      </ArwDiv>
    </Link>
  );
};

export default Button;
