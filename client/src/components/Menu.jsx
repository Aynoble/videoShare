import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

function Menu(props) {
  const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: calc(100vh - 56px);
    // max-height: calc(100vh - 56px);
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
    position: sticky;
    top: 0;
    overflow-y: hidden;

    :hover {
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 7px;
        background-color: white;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: gray;
      }
    }
  `;
  const Wrapper = styled.div`
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
  `;

  const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7px 5px;

    :hover {
      background-color: ${({ theme }) => theme.bg};
      border-radius: 10px;
    }
  `;

  const Span = styled.span``;

  const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
  `;

  const Login = styled.div``;

  const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  `;
  const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
  `;
  return (
    <Container>
      <Wrapper>
        <Item>
          <HomeIcon />
          <Span>Home</Span>
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          <Span>Explore</Span>
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          <Span>Subscriptions</Span>
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          <Span>Library</Span>
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          <Span>History</Span>
        </Item>
        <Hr />
        <Login>
          <Span>Sign in to like videos, comment, and subscribe</Span>
          <Button>
            <AccountCircleOutlinedIcon />
            <Span>SIGN IN</Span>
          </Button>
        </Login>
        <Hr />
        <Title>BEST OF AYTUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          <Span>Music</Span>
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          <Span>Sports</Span>
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          <Span>Gaming</Span>
        </Item>
        <Item>
          <MovieOutlinedIcon />
          <Span>Movies</Span>
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          <Span>News</Span>
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          <Span>Live</Span>
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          <Span>Settings</Span>
        </Item>
        <Item>
          <FlagOutlinedIcon />
          <Span>Report</Span>
        </Item>
        <Item>
          <HelpOutlinedIcon />
          <Span>Help</Span>
        </Item>
        <Item onClick={() => props.setDarkMode(!props.darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          <Span>{props.darkMode ? "Light Mode" : "Dark Mode"}</Span>
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Menu;
