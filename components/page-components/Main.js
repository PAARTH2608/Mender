import { useState, useEffect, useRef } from "react";
import { MainDiv } from "../../pages/index";
import styled from "styled-components";
import Loader from "../Loader";
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import { motion } from "framer-motion";
import Button from "../utils/Button";
import { FaArrowRight } from "react-icons/fa";

const ParaDiv = styled(motion.div)`
  height: ${(props) => props.height};
  width: 90%;
  border-radius: 10px;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  z-index: 1;
  padding: 1.5vh;
  margin-bottom: 5vh;
`;
const ParaDivHlp = styled(motion.div)`
  height: ${(props) => props.height};
  width: 80%;
  border-radius: 10px;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  z-index: 1;
  padding: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputDiv = styled.textarea`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 1.5em;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      99deg,
      rgba(98, 84, 255, 1) 0%,
      rgba(62, 195, 213, 1) 100%
    );
    border-radius: 10px;
    margin-right: 10px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  overflow-x: hidden;
`;
const InputDivInput = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 1.3em;
  text-align: center;
`;
const HeaderDiv = styled(motion.div)`
  height: 80vh;
  width: 5%;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const HelperDiv = styled.div`
  font-size: 1.3em;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      99deg,
      rgba(98, 84, 255, 1) 0%,
      rgba(62, 195, 213, 1) 100%
    );
    border-radius: 10px;
    margin-right: 10px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  overflow-x: hidden;
`;
const HelperTwo = styled.div`
  font-size: 1.3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 100vh;
`;
const CaseModal = styled.h1`
  font-size: 1.3em;
  padding: 0;
  margin: 0;
  font-weight: 500;
  color: grey;
`;
const Handle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  padding-bottom: 5vh;
`;
const ArwDiv = styled(motion.button)`
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
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

const Main = () => {
  const [showLoader, setLoader] = useState(true);

  const paragraphRef = useRef(null);
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState(null);

  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log("model loaded");
  };

  useEffect(() => {
    loadModel();
    setTimeout(function () {
      setLoader(false);
    }, 2000);
  }, []);

  const answerQuestion = async () => {
    if (model != null) {
      const paragraph = paragraphRef.current.value;
      const question = questionRef.current.value;
      const answers = await model.findAnswers(question, paragraph);
      setAnswer(answers);
      console.log(answers);
    }
  };
  return (
    <MainDiv>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <ColDiv>
            <ParaDiv
              height="40vh"
              ins={true}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <InputDiv
                placeholder="Drop your paragraph here..."
                ref={paragraphRef}
              />
            </ParaDiv>
            <Handle>
              <ParaDivHlp
                height="8vh"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <InputDivInput
                  placeholder="Enter Your Question..."
                  ref={questionRef}
                  onKeyPress={answerQuestion}
                />
              </ParaDivHlp>
              <ArwDiv
                height="8vh"
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                onClick={answerQuestion}
              >
                <FaArrowRight size={20} />
              </ArwDiv>
            </Handle>
            <ParaDiv height="30vh">
              {answer ? (
                <HelperDiv>
                  {answer.map((ans, i) => (
                    <div key={i}>{ans.text}</div>
                  ))}
                </HelperDiv>
              ) : (
                <CaseModal>No Answers Found</CaseModal>
              )}
            </ParaDiv>
          </ColDiv>
          <HeaderDiv
            height="8vh"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <HelperTwo>M</HelperTwo>
            <HelperTwo>E</HelperTwo>
            <HelperTwo>N</HelperTwo>
            <HelperTwo>D</HelperTwo>
            <HelperTwo>E</HelperTwo>
            <HelperTwo>R</HelperTwo>
            <HelperTwo></HelperTwo>
            <HelperTwo>W</HelperTwo>
            <HelperTwo>E</HelperTwo>
            <HelperTwo>B</HelperTwo>
          </HeaderDiv>
        </>
      )}
    </MainDiv>
  );
};

export default Main;
