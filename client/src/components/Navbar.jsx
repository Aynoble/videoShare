import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Navbar() {
  const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 56px;
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
    position: relative;
  `;
  const SearchContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  `;
  const Input = styled.input`
    border: none;
    background-color: transparent;
    outline: 0;
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
        <SearchContainer>
          <Input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </SearchContainer>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
