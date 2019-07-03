import styled from "styled-components";
import Sidebar from "../Sidebar";
import { Dispatch, SetStateAction } from "react";

const Container = styled.div`
  height: 56px;
  width: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: white;
`;
const Title = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.softGray};
`;
const Route = styled.a`
  margin-left: 20px;
  font-size: 24px;
`;
const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.softGray};
  width: fit-content;
`;
const MenuIcon = styled.img`
  width: 42px;
  height: 42px;
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
  pathname: string;
}

const HeaderPresenter: React.FC<IProps> = ({
  Side,
  MenuOnClick,
  toggleSidebar,
  pathname
}) => {
  return (
    <>
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
          <Title>Jerrynim Blog</Title>
          <Route href={`${pathname}`}>{pathname}</Route>
        </Left>
        <Right>
          <ShareIcon src="../../static/shareIcon.png" alt="" />
        </Right>
      </Container>
    </>
  );
};
export default HeaderPresenter;
