import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { Palette } from "../components/Palette";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import Register from "./register";
import Social from "../components/social";
import Women from "../public/women.svg";

export const MainDiv = styled.div`
  background-color: ${Palette.maindiv};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.something ? "column" : "row")};
  justify-content: center;
  align-items: ${props => props.type};
  position: relative;
  padding: 2%;
`;
const Title = styled(motion.div)`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 10px;
  background: #8dc1c8;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  padding: 2vh;
  font-size: 2em;
  margin-bottom: 2vh;
`;
const Helper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const ImgDiv = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled(motion.button)`
  padding: 2vh;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  background: transparent;
  outline: none;
  border: none;
  font-size: 1.5em;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

// framer motion function
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
  },
};
const dropOut = {
  hidden: {
    x: "100vh",
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
  },
};
export default function Home() {
  const [showLoader, setLoader] = useState(true);
  const [showBtn, setBtn] = useState(false);
  const { data: session, loading } = useSession();

  useEffect(() => {
    setTimeout(function () {
      setLoader(false);
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(function () {
      setBtn(true);
    }, 5000);
  }, []);

  return (
    <>
      {!session && <Register />}
      {session && (
        <MainDiv something="column">
          {showLoader ? (
            <Helper>
              <Loader />
            </Helper>
          ) : (
            <>
              <Row>
                <Col>
                  <Title
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    height="10vh"
                    width="25%"
                  >
                    Hello Fellas
                  </Title>
                  <Title
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    height="40vh"
                    width="100%"
                  >
                    Concept :<br></br>
                    This website works on the concept of Natural Language
                    Processing. We have used a pre-trained NLP model which takes
                    a paragraph/article as input, reads it and tries to answer
                    the question asked by the user based on that article.
                  </Title>
                </Col>
                <ImgDiv>
                  <Image
                    src="/women.svg"
                    alt="women"
                    height={340}
                    width={340}
                  />
                  {showBtn && (
                    <Link href="/main" passHref>
                      <Button
                        variants={dropOut}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        Explore
                      </Button>
                    </Link>
                  )}
                </ImgDiv>
              </Row>
            </>
          )}
          <Helper>
            <Social />
          </Helper>
        </MainDiv>
      )}
    </>
  );
}
