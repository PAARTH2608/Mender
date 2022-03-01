import { useState, useEffect } from "react";
import { MainDiv } from "../../pages/index";
import styled from "styled-components";
import Loader from "../Loader";
import Automatic from "../Authentication/Automatic";
import Social from "../socials/social";

const Util = styled.div`
  display: flex;
  flex-direction: column;
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
        </Util>
      )}
      <Social />
    </MainDiv>
  );
};

export default RegisterHelper;
