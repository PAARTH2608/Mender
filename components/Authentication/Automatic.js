import Router from 'next/router';
import { useState } from 'react';
import styled from "styled-components";
import { FaGoogle, FaFacebookF, FaUserLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { signIn, signOut } from "next-auth/react";

const MainDiv = styled(motion.div)`
  height: 10vh;
  width: 60%;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  margin-top: 3rem;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;
const BtnDiv = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
const Btn = styled.button`
  padding: 0.5rem;
  font-size: 1.3rem;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const headerVariants = {
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
const Helper = styled.div`
font-size: 1.3rem;
text-align: center;
color: grey;
padding-top:2vh;
`;
const Automatic = () => {
  let bool = false;
  return (
    <>
      <MainDiv
        onClick={() => signIn()}
        height="8vh"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <BtnDiv>
          <FaUserLock size={20} />
          <Btn>Please Authenticate</Btn>
        </BtnDiv>
      </MainDiv>
      {bool && <Helper>Please wait a moment...</Helper>}
    </>
  );
};

export default Automatic;
