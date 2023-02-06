import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ type }) {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const TitleText =
    "Complete MERN App (OTP Verification, JWT Token, Authentication, Reset Password)";

  const num = () => {
    if (type === "sm") {
      return 50;
    } else {
      return 70;
    }
  };

  const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
    cursor: pointer;
    text-decoration: none;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: ${(props) => props.type === "sm" && "10px"};
    // align-items: ${(props) => props.type === "sm" && "center"};
  `;

  const Image = styled.img`
    width: 100%;
    height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
    background-color: #999;
    border-radius: 10px;
    flex: ${(props) => props.type === "sm" && "1"};
  `;

  const Details = styled.div`
    display: flex;
    margin-top: ${(props) => (props.type === "sm" ? "0px" : "16px")};
    gap: 12px;
    flex: ${(props) => props.type === "sm" && "1"};
  `;

  const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: ${(props) => props.type === "sm" && "none"};
  `;

  const Texts = styled.div``;
  const Title = styled.h1`
    font-size: ${(props) => (props.type === "sm" ? "14px" : "16px")};
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
  `;
  const ChannelName = styled.h2`
    font-size: ${(props) => (props.type === "sm" ? "12px" : "14px")};
    color: ${({ theme }) => theme.textColorSoft};
    margin-top: 9px;
  `;
  const Info = styled.div`
    font-size: ${(props) => (props.type === "sm" ? "12px" : "14px")};
    color: ${({ theme }) => theme.textColorSoft};
  `;
  return (
    <Link to="video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/BfrJxGQEPSc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmTYKLJn28n9qiP_RBBnxQPLBOLg"
          alt=""
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/hkRZlmV18W3wm8DlqOZaQHe-g-h8ugcsIdeSk6ZpCOyhOXf1ReGTseiNi8ek92Waosv4r32G=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <Texts>
            <Title type={type}>{truncate(TitleText, num())}</Title>
            <ChannelName type={type}>Daily Tuition</ChannelName>
            <Info type={type}>47K views · 1 month ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
