import React from "react";
import styled from "../../style/typed-components";
import Link from "next/link";

const Container = styled.div<{ Side: boolean }>`
  z-index: 7;
  position: fixed;
  height: 100%;
  width: 280px;
  transform: ${(props) => (props.Side ? "" : "translateX(-300px)")};
  transition: 0.4s ease-in;
  background-color: white;
  box-shadow: 2px 2px 10px grey;
`;
const Title = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.softGray};
  cursor: pointer;
`;

const Left = styled.div<{ Side: boolean }>`
  height: 56px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.softGray};
  width: fit-content;
  opacity: ${(props) => (props.Side ? "1" : "0")};
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
const Profile = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 22px;
  margin: 12px 0px;
`;
const Bio = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.theme.softGray};
`;
const GrayBar = styled.div`
  width: 100%;
  height: 2px;
  margin: auto;
  width: 90%;
  background-color: ${(props) => props.theme.softGray};
`;

const Categories = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0px;
`;
const Category = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0px;
  }
`;

const CategoryIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

const CategoryText = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.black};
  cursor: pointer;
`;

interface IProps {
  Side: boolean;
  MenuOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SidebarPresenter: React.FC<IProps> = ({ Side, MenuOnClick }) => {
  return (
    <Container Side={Side}>
      <Left Side={Side}>
        <MenuButton onClick={MenuOnClick}>
          <MenuIcon src="../../static/menuIcon.png" alt="" />
        </MenuButton>
        <Link href="/">
          <Title>Jerrynim Blog</Title>
        </Link>
      </Left>
      <Profile>
        <Name>Jerrynim</Name>
        <Bio>안녕하세요. 최신기술을 좋아하는 Javascript 개발자 입니다.</Bio>
      </Profile>
      <GrayBar />
      <Categories>
        <Category>
          <Link href="/">
            <CategoryIcon src="../../static/homeIconGray.png" alt="" />
          </Link>
          <Link href="/">
            <CategoryText>Home</CategoryText>
          </Link>
        </Category>
        <Category>
          <Link href="/Articles">
            <CategoryIcon src="../../static/ListIcon.png" alt="" />
          </Link>
          <Link href="/Articles">
            <CategoryText>Articles</CategoryText>
          </Link>
        </Category>
        <Category>
          <Link href="/Project">
            <CategoryIcon src="../../static/Project.png" alt="" />
          </Link>
          <Link href="/Project">
            <CategoryText>Project</CategoryText>
          </Link>
        </Category>
        <Category>
          <Link href="/AboutMe">
            <CategoryIcon src="../../static/PersonIcon.png" alt="" />
          </Link>
          <Link href="/AboutMe">
            <CategoryText>About Me</CategoryText>
          </Link>
        </Category>
      </Categories>
    </Container>
  );
};
export default SidebarPresenter;
