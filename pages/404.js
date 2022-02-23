import styled from "styled-components";
import { MainDiv } from "./index";
import Button from "../components/utils/Button";
import Link from "next/link";

const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 40%;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  font-size: 1.2em;
  padding: 2vh;
  margin-left: 2%;
`;
const Custom404 = () => {
  return (
    <MainDiv>
      <Button attr={false} />
      <InnerDiv>
        Looks like you encountered with some problem:\ Please go back and try
        again.
      </InnerDiv>
    </MainDiv>
  );
};

export default Custom404;
