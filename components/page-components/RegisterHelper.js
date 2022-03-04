import { useState, useEffect } from "react";
import Image from "next/image";
import { MainDiv } from "../../pages/index";
import styled from "styled-components";
import Loader from "../Loader";
import Automatic from "../Authentication/Automatic";
import Social from "../social";

const Util = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const RegisterHelper = () => {
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
          <Automatic />
          <Image src="/man1.svg" alt="man" height={740} width={440} />
        </Util>
      )}
      <Social />
    </MainDiv>
  );
};

export default RegisterHelper;
