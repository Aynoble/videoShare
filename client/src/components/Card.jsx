import styled from "styled-components";
import { Link } from "react-router-dom";

function Card() {
  const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
    text-decoration: none;
    // background-color: ${({ theme }) => theme.bgLighter};
  `;

  const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
  `;

  const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
  `;

  const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
  `;

  const Texts = styled.div``;
  const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
  `;
  const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textColorSoft};
    margin: 9px 0px;
  `;
  const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textColorSoft};
  `;
  return (
    <Link to="video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image
          src="https://i.ytimg.com/vi/BfrJxGQEPSc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmTYKLJn28n9qiP_RBBnxQPLBOLg"
          alt=""
        />
        <Details>
          <ChannelImage
            src="https://yt3.ggpht.com/hkRZlmV18W3wm8DlqOZaQHe-g-h8ugcsIdeSk6ZpCOyhOXf1ReGTseiNi8ek92Waosv4r32G=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <Texts>
            <Title>
              Complete MERN App (OTP Verification, JWT Token, Authentication,
              Reset Password)
            </Title>
            <ChannelName>Daily Tuition</ChannelName>
            <Info>47K views · 1 month ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
