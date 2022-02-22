import { useState, useEffect } from "react";
import styled from "styled-components";
import { Palette } from "../components/Palette";
import Loader from "../components/Loader";
import RegisterBtn from "../components/RegisterBtn";

export const MainDiv = styled.div`
  background-color: ${Palette.maindiv};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Title = styled.div`
  height: 10vh;
  width: 20%;
  border-radius: 10px;
  background: #8dc1c8;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  padding: 2vh;
  font-size: 2em;
`;
export default function Home() {
  const [showLoader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <MainDiv>{showLoader ? 
      <Loader /> : 
      <>
        <RegisterBtn />
        <Title>Hello Fellas</Title>
      </>}
    </MainDiv>
  );
}
