import * as React from "react";
import styled from "styled-components";
import { Post } from "../../types/type";

const Container = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 416px;
  height: 300px;
  background-color: wheat;
  margin: 20px 16px 12px 16px;
`;

const Left = styled.div`
  border-right: 1px solid ${props => props.theme.lightGray};
`;
const Right = styled.div``;

interface IProps {
  posts: Post[];
}

const CardList: React.FC<IProps> = ({ posts }) => (
  <Container>
    <Left>
      <Card />
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
