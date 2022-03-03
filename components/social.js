import styled from "styled-components";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {
  FaFacebook,
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
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaGithub size={30} />
        <FaTwitter size={30} />
        <FaLinkedinIn size={30} />
      </MainContainer>
    </IconContext.Provider>
  );
};

export default Social;
