import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 56px;
    z-index: 9999;
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
  `;

  const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};
  `;

  const Img = styled.img`
    height: 25px;
  `;

  const SearchContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: ${({ theme }) => theme.textColor};
  `;
  const Input = styled.input`
    border: none;
    background-color: transparent;
    outline: 0;
    width: 100%;
    color: ${({ theme }) => theme.textColor};
  `;
  const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  `;

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} alt="" />
            AyTube
          </Logo>
        </Link>
        <SearchContainer>
          <Input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </SearchContainer>
        <Link to="auth" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
