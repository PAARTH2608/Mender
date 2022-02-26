import RegisterHelper from "../components/page-components/RegisterHelper";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

const Register = () => {
  const { data: session, loading } = useSession();
  console.log(session);
  return (
    <>
      <RegisterHelper />
    </>
  );
};

export default Register;
