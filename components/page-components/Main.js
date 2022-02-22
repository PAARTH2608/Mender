import { useState, useEffect, useRef } from "react";
import { MainDiv } from "../../pages/index";
import styled from "styled-components";
import Loader from "../Loader";
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";

const ParaDiv = styled.div`
  height: ${(props) => props.height};
  width: 90%;
  border-radius: 10px;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  z-index: 1;
  padding: 1.5vh;
  margin-bottom: 5vh;
`;
const ParaDivHlp = styled.div`
  height: ${(props) => props.height};
  width: 80%;
  border-radius: 10px;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  z-index: 1;
  padding: 2vh;
  margin-bottom: 5vh;
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
const HeaderDiv = styled.div`
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

  const answerQuestion = async (e) => {
    if (e.which === 13 && model != null) {
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
            <ParaDiv height="40vh" ins={true}>
              <InputDiv
                placeholder="Drop your paragraph here..."
                ref={paragraphRef}
              />
            </ParaDiv>
            <ParaDivHlp height="8vh">
              <InputDivInput
                placeholder="Enter Your Question..."
                ref={questionRef}
                onKeyPress={answerQuestion}
              />
            </ParaDivHlp>
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
          <HeaderDiv>
            <HelperDiv>M</HelperDiv>
            <HelperDiv>E</HelperDiv>
            <HelperDiv>N</HelperDiv>
            <HelperDiv>D</HelperDiv>
            <HelperDiv>E</HelperDiv>
            <HelperDiv>R</HelperDiv>
            <HelperDiv></HelperDiv>
            <HelperDiv>W</HelperDiv>
            <HelperDiv>E</HelperDiv>
            <HelperDiv>B</HelperDiv>
          </HeaderDiv>
        </>
      )}
    </MainDiv>
  );
};

export default Main;
