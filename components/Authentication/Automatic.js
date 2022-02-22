import { useState } from "react";
import styled from "styled-components";
import { firebase } from "../../firebase/firebase";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const MainDiv = styled.div`
  height: 10vh;
  width: 60%;
  box-shadow: 20px 20px 60px #78a4aa, -20px -20px 60px #a2dee6;
  margin-top: 3rem;
  border-radius: 10px;
`;
const BtnDiv = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Btn = styled.button`
  padding: 0.5rem;
  font-size: 1.3rem;
  background-color: transparent;
  border: none;
`;

const Automatic = () => {
  const [error, setError] = useState(false);

  const signInWithGoogle = () => {
    let google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((result) => {
        console.log(result.additionalUserInfo.profile.email);
        // setEmail(result.additionalUserInfo.profile.email);
        // dispatch(login({ email: result.additionalUserInfo.profile.email }));
        // setError("");
      })
      .catch((error) => {});
  };
  const signInWithFacebook = () => {
    let facebook_provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(facebook_provider)
      .then((result) => {
        console.log(result.additionalUserInfo.profile.email);
        // setEmail(result.additionalUserInfo.profile.email);
        // dispatch(login({ email: result.additionalUserInfo.profile.email }));
        // setError("");
      })
      .catch((error) => {});
  };
  return (
    <>
      <MainDiv onClick={signInWithGoogle}>
        <BtnDiv>
          <FaGoogle size={20} />
          <Btn>Continue With Google</Btn>
        </BtnDiv>
      </MainDiv>
      <MainDiv onClick={signInWithFacebook}>
        <BtnDiv>
          <FaFacebookF size={20} />
          <Btn>Continue With Facebook</Btn>
        </BtnDiv>
      </MainDiv>
    </>
  );
};

export default Automatic;
