import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { MainDiv } from "./index";
import Button from "../components/utils/Button";

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
    <MainDiv type="center">
      <Link href='/' passHref>
        <Button attr={false} />
      </Link>
      <InnerDiv>
        Looks like you encountered with some problem:\ Please go back and try
        again.
      </InnerDiv>
      <Image src='/man.svg' alt='man' height={340} width={340}/>
    </MainDiv>
  );
};

export default Custom404;
