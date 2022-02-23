import { useState, useEffect } from "react";
import { MainDiv } from "../../pages/index";
import styled from "styled-components";
import Loader from "../Loader";
import Manual from "../Authentication/Manual";
import Mid from "../Authentication/Mid";
import Automatic from "../Authentication/Automatic";
import { motion } from "framer-motion";

// import { signIn, signOut, useSession } from 'next-auth/client'

const Util = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  width: 50%;
`;
const Register = () => {
  const [showLoader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <MainDiv>
      {showLoader ? (
        <Loader />
      ) : (
        <Util>
          <Manual />
          <Mid />
          <Automatic />
        </Util>
      )}
    </MainDiv>
  );
};

export default Register;
