import styled from "styled-components";
import Sidebar from "../Sidebar";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";

const Container = styled.h1`
  opacity: 0.8;
  z-index: 6;
  height: 56px;
  width: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: white;
`;
const Title = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.softGray};
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.softGray};
  width: fit-content;
`;
const MenuIcon = styled.img`
  width: 25px;
  height: 20px;
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const ShareIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 25px;
`;

const MenuButton = styled.button`
  margin: 0px 10px 0px 20px;
`;

interface IProps {
  Side: boolean;
  MenuOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

const HeaderPresenter: React.FC<IProps> = ({
  Side,
  MenuOnClick,
  toggleSidebar
}) => {
  return (
    <div>
      <Sidebar
        Side={Side}
        toggleSidebar={toggleSidebar}
        MenuOnClick={MenuOnClick}
      />
      <Container>
        <Left>
          <MenuButton onClick={MenuOnClick}>
            <MenuIcon src="../../static/menuIcon.png" alt="" />
          </MenuButton>
          <Link href="/">
            <Title>Jerrynim Blog</Title>
          </Link>
        </Left>
        <Right>
          <ShareIcon src="../../static/shareIcon.png" alt="" />
        </Right>
      </Container>
    </div>
  );
};
export default HeaderPresenter;
