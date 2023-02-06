import styled from "styled-components";
import Comment from "./Comment";

function Comments() {
  const Container = styled.div``;

  const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `;

  const Input = styled.input`
    flex: 1;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    color: ${({ theme }) => theme.textColor};
  `;

  return (
    <Container>
      <NewComment>
        <Avatar
          src="https://yt3.ggpht.com/hkRZlmV18W3wm8DlqOZaQHe-g-h8ugcsIdeSk6ZpCOyhOXf1ReGTseiNi8ek92Waosv4r32G=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <Input type="text" placeholder="Add a Comment" />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
}

export default Comments;
