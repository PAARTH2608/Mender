import styled from "styled-components";

const MainDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const Header = styled.div`
font-size: 1.5em;
`;

const Mid = () => {
    return <MainDiv>
        <Header>OR</Header>
    </MainDiv>;
}

export default Mid;