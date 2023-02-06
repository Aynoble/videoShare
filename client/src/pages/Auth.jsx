import styled from "styled-components";
import { Link } from "react-router-dom";

function Auth() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.textColor};
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
  `;

  const Title = styled.h1`
    font-size: 24px;
  `;

  const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 200;
  `;

  const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
    color: ${({ theme }) => theme.textColor};
  `;

  const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 500;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textColor};
  `;

  const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
  `;

  const Links = styled.div``;

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <SubTitle>to continue to AyTube</SubTitle>
        <Input type="text" placeholder="Username" required />
        <Input type="password" placeholder="Password" required />
        <Button>Sign In</Button>
        <Title>OR</Title>
        <Input type="text" placeholder="Username" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English (USA)
        <Links>
          <Link to="" style={{ marginLeft: "30px", textDecoration: "none" }}>
            Help
          </Link>
          <Link to="" style={{ marginLeft: "30px", textDecoration: "none" }}>
            Privacy
          </Link>
          <Link to="" style={{ marginLeft: "30px", textDecoration: "none" }}>
            Terms
          </Link>
        </Links>
      </More>
    </Container>
  );
}

export default Auth;
