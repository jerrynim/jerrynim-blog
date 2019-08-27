import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import styled from "../../style/typed-components";

const Container = styled.div<{ Side: boolean }>`
  z-index: 7;
  position: fixed;
  height: 100%;
  width: 280px;
  transform: ${props => (props.Side ? "" : "translateX(-300px)")};
  transition: 0.4s ease-in;
  background-color: white;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
`;
const Title = styled.a`
  font-size: 20px;
  color: ${props => props.theme.softGray};
  cursor: pointer;
`;

const Left = styled.div<{ Side: boolean }>`
  height: 56px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.softGray};
  width: fit-content;
  opacity: ${props => (props.Side ? "1" : "0")};
  transition: 1.5s;
  transition-delay: 0.5s;
`;

const MenuIcon = styled.img`
  width: 25px;
  height: 20px;
`;

const MenuButton = styled.button`
  margin: 0px 10px 0px 20px;
`;

interface IProps {
  SidebarStatus: boolean;
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

const SidebarPresenter: React.FC<IProps> = ({ SidebarStatus, toggleSidebar }) => (
  <Container Side={SidebarStatus}>
    <Left Side={SidebarStatus}>
      <MenuButton onClick={() => toggleSidebar(!SidebarStatus)}>
        <MenuIcon src="../../static/menuIcon.png" alt="" />
      </MenuButton>
      <Link href="/">
        <Title>Jerrynim Blog</Title>
      </Link>
    </Left>
  </Container>
);

export default SidebarPresenter;
