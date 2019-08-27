import styled from "styled-components";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Sidebar from "../Sidebar";

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
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.softGray};
  justify-content: space-between;
  & button {
    margin-left: 24px;
  }

  & img {
    width: 25px;
    height: 20px;
  }

  & a {
    font-size: 24px;
    color: ${props => props.theme.black};
    margin-right: 35px;
    cursor: pointer;
    color: ${props => props.theme.black};
  }
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & img {
    width: 28px;
    height: 28px;
    margin-right: 25px;
  }
`;

interface IProps {
  SidebarStatus: boolean;
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

const HeaderPresenter: React.FC<IProps> = ({ SidebarStatus, toggleSidebar }) => (
  <>
    <Sidebar SidebarStatus={SidebarStatus} toggleSidebar={toggleSidebar} />
    <Container>
      <Left>
        <button type="button" onClick={() => toggleSidebar(!SidebarStatus)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </button>
        <Link href="/">
          <a>Jerrynim Blog</a>
        </Link>
      </Left>
      <Right>
        <img src="../../static/shareIcon.png" alt="" />
      </Right>
    </Container>
  </>
);

export default HeaderPresenter;
