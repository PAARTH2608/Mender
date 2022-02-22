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
  padding: 2vh;
  margin-bottom: 2vh;
`;
const InputDiv = styled.textarea`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 1.5em;
`;
const InputDivInput = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 1.5em;
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
const HelperDiv = styled.div``;
const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  height: 100vh;
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
            <ParaDiv height="40vh">
              <InputDiv
                placeholder="Drop your paragraph here..."
                ref={paragraphRef}
              />
            </ParaDiv>
            <ParaDiv height="8vh">
              <InputDivInput
                placeholder="Enter your question"
                ref={questionRef}
                onKeyPress={answerQuestion}
              />
            </ParaDiv>
            <ParaDiv height="30vh">
              {answer ? (
                <HelperDiv>
                  {answer.map((ans, i) => (
                    <div key={i}>{ans.text}</div>
                  ))}
                </HelperDiv>
              ) : (
                "No answers found"
              )}
            </ParaDiv>
          </ColDiv>
          <HeaderDiv>
            <HelperDiv>L</HelperDiv>
            <HelperDiv>O</HelperDiv>
            <HelperDiv>R</HelperDiv>
            <HelperDiv>E</HelperDiv>
            <HelperDiv>M</HelperDiv>
            <HelperDiv>I</HelperDiv>
            <HelperDiv>P</HelperDiv>
            <HelperDiv>S</HelperDiv>
            <HelperDiv>U</HelperDiv>
            <HelperDiv>M</HelperDiv>
          </HeaderDiv>
        </>
      )}
    </MainDiv>
  );
};

export default Main;
