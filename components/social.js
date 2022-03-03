import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { headerVariants } from "./Authentication/Automatic";

const MainContainer = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  height: 10vh;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background: #8dc1c8;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
`;
const Social = () => {
  return (
    <IconContext.Provider value={{ cursor: "pointer" }}>
      <MainContainer
        onClick={() => signIn()}
        height="8vh"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="https://github.com/PAARTH2608">
          <a target="_blank">
            <FaGithub size={33} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/_paarth7_/">
          <a target="_blank">
            <FaInstagram size={33} />
          </a>
        </Link>
        <Link href="https://www.facebook.com/paarth.jain.906">
          <a target="_blank">
            <FaFacebookF size={33} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/paarth-jain-470522208/">
          <a target="_blank">
            <FaLinkedinIn size={33} />
          </a>
        </Link>
        <Link href="https://twitter.com/PAARTHJAIN7">
          <a target="_blank">
            <FaTwitter size={33} />
          </a>
        </Link>
      </MainContainer>
    </IconContext.Provider>
  );
};

export default Social;
