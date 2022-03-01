import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const MainContainer = styled.div`
height: 10vh;
width: 50%;
display: flex;
justify-content: space-around;
align-items: center;
`;
const Social = () => {
    return <MainContainer>
        <FaFacebook />
        <FaInstagram />
        <FaGithub />
        <FaTwitter />
        <FaLinkedinIn />
    </MainContainer>;
}

export default Social;