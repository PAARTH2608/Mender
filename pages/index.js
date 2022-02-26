import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { Palette } from "../components/Palette";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import Register from "./register";
import Link from "next/link";

export const MainDiv = styled.div`
  background-color: ${Palette.maindiv};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Title = styled(motion.div)`
  height: 10vh;
  width: 20%;
  border-radius: 10px;
  background: #8dc1c8;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  padding: 2vh;
  font-size: 2em;
`;

const dropIn = {
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
export default function Home() {
  const [showLoader, setLoader] = useState(true);
  const { data: session, loading } = useSession();

  useEffect(() => {
    setTimeout(function () {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      {!session && <Register />}
      {session && (
        <MainDiv>
          {showLoader ? (
            <Loader />
          ) : (
            <>
            <Link href='/main' passHref>
              <Title
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                Hello Fellas
              </Title>
            </Link>
            </>
          )}
        </MainDiv>
      )}
    </>
  );
}
