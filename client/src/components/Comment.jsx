import styled from "styled-components";

function Comment() {
  const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
  `;

  const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `;

  const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
  `;

  const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color ${({ theme }) => theme.textColorSoft};
    margin-left: 5px;
  `;

  const Text = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.textColor};
  `;

  return (
    <Container>
      <Avatar
        src="https://yt3.ggpht.com/hkRZlmV18W3wm8DlqOZaQHe-g-h8ugcsIdeSk6ZpCOyhOXf1ReGTseiNi8ek92Waosv4r32G=s68-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <Details>
        <Name>
          Daily Tuition <Date>2 days ago</Date>
        </Name>
        <Text>This is a very amazing video! Keep up the good content!</Text>
      </Details>
    </Container>
  );
}

export default Comment;
