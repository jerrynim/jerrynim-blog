import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Container = styled.div`
  opacity: 0.8;
  z-index: 6;
  height: 56px;
  width: 100%;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: white;
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.softGray};
  justify-content: space-between;
  a {
    font-size: 24px;
    line-height: 28px;
    margin-left: 30px;
    margin-right: 35px;
    cursor: pointer;
  }
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & img {
    width: 24px;
    height: 24px;
    margin-right: 40px;
    cursor: pointer;
  }
`;

interface IProps {
  path: string;
}

const HeaderPresenter: React.FC<IProps> = ({ path }) => (
  <>
    <Container>
      <Left>
        <Link href="/">
          <a>Jerrynim Blog</a>
        </Link>
      </Left>
      <Right>
        <CopyToClipboard
          text={`https://jerrynim.com/${path}`}
          onCopy={() => alert(`copied to clipboard https://jerrynim.com${path}`)}
        >
          <img src="../../static/shareIcon.png" alt="" />
        </CopyToClipboard>
      </Right>
    </Container>
  </>
);

export default HeaderPresenter;
