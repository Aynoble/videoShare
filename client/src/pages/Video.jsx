import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

function Video() {
  const Container = styled.div`
    display: flex;
    gap: 24px;
  `;
  const Content = styled.div`
    flex: 5;
  `;

  const VideoWrapper = styled.div``;

  const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.textColor};
  `;

  const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Info = styled.span`
    color: ${({ theme }) => theme.textColorSoft};
  `;

  const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.textColor};
  `;

  const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.textColor};
  `;

  const Hr = styled.hr`
    border: 0.5px solid ${({ theme }) => theme.soft};
    margin: 15px 0px;
  `;

  const Channel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const ChannelInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `;

  const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `;

  const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.textColor};
  `;

  const ChannelName = styled.span`
    font-weight: 500;
  `;

  const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textColorSoft};
    font-size: 12px;
  `;

  const Description = styled.p`
    font-size: 14px;
  `;

  const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
  `;

  const Recommendation = styled.div`
    flex: 2;
  `;

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/k3vfj-e1Ma4"
            title="Youtube Video Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>
          Complete MERN App (OTP Verification, JWT Token, Authentication, Reset
          Password)
        </Title>
        <Details>
          <Info>47K views · 1 month ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image
              src="https://yt3.ggpht.com/hkRZlmV18W3wm8DlqOZaQHe-g-h8ugcsIdeSk6ZpCOyhOXf1ReGTseiNi8ek92Waosv4r32G=s68-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <ChannelDetail>
              <ChannelName>Daily Tuition</ChannelName>
              <ChannelCounter>536k Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
}

export default Video;
