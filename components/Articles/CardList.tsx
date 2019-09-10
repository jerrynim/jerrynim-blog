import * as React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import { Post } from "../../types/type";

const Container = styled.div`
  display: flex;
  padding: 20px 0px;
`;

const Card = styled.div`
  background-color: white;
  padding: 20px 16px 12px;
  border-bottom: 1px solid ${theme.light_gray};
  position: relative;
  .img_wrapper {
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 18px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
    width: 100%;
  }

  h2 {
    color: ${theme.thin_gray};
    margin-bottom: 12px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
  }
  .tagBox {
    display: flex;
  }

  p {
  }
`;

const Left = styled.div`
  flex: 1;
  border-right: 1px solid ${theme.light_gray};
`;
const Right = styled.div`
  flex: 1;
`;

interface IProps {
  posts: Post[];
}

const CardList: React.FC<IProps> = ({ posts }) => (
  <Container>
    <Left>
      <Card>
        <div className="img_wrapper">
          <img
            src="https://cms-assets.tutsplus.com/uploads/users/127/posts/31162/image/final.png"
            alt=""
          />
        </div>
        <h1>Start your first blog contents</h1>
        <h2>
          GraphQL is a query language for your API, and a server-side runtime for executing queries
          by using a type system you define for your data. GraphQL isn't tied to any specific
          database or storage engine and is instead backed by your existing code and data.
        </h2>
        <div className="bottom">s</div>
      </Card>
      <Card />
      <Card />
    </Left>
    <Right>
      <Card />
      <Card />
      <Card />
    </Right>
  </Container>
);

export default CardList;
