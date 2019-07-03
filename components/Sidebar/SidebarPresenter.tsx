import styled from "../../style/typed-components";

const Container = styled.div<{ Side: boolean }>`
  position: fixed;
  height: 100%;
  width: 300px;
  transform: ${(props) => (props.Side ? "" : "translateX(-300px)")};
  transition: 0.4s ease-in;
  background-color: white;
  box-shadow: 2px 2px 10px grey;
`;
const Title = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.softGray};
`;

const Left = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.softGray};
  width: fit-content;
`;

const MenuIcon = styled.img`
  width: 42px;
  height: 42px;
`;

const MenuButton = styled.button`
  margin: 0px 10px 0px 20px;
`;
const Profile = styled.div`
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProfilePhoto = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const Name = styled.div`
  font-size: 24px;
  margin: 21px 0px;
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
  margin: 45px 20px 0px;
`;
const Category = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  :last-child {
    margin-bottom: 0px;
  }
`;

const CategoryIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
`;

const CategoryText = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.black};
`;

interface IProps {
  Side: boolean;
  MenuOnClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SidebarPresenter: React.FC<IProps> = ({ Side, MenuOnClick }) => {
  return (
    <Container Side={Side}>
      <Left>
        <MenuButton onClick={MenuOnClick}>
          <MenuIcon src="../../static/menuIcon.png" alt="" />
        </MenuButton>
        <Title>Jerrynim Blog</Title>
      </Left>
      <Profile>
        <ProfilePhoto />
        <Name>Jerrynim</Name>
        <Bio>안녕하세요. 최신기술을 좋아하는 Javascript 개발자 입니다.</Bio>
      </Profile>
      <GrayBar />
      <Categories>
        <Category>
          <CategoryIcon src="../../static/homeIconGray.png" alt="" />
          <CategoryText>Home</CategoryText>
        </Category>
        <Category>
          <CategoryIcon src="../../static/ListIcon.png" alt="" />
          <CategoryText>Articles</CategoryText>
        </Category>
        <Category>
          <CategoryIcon src="../../static/Project.png" alt="" />
          <CategoryText>Project</CategoryText>
        </Category>
        <Category>
          <CategoryIcon src="../../static/PersonIcon.png" alt="" />
          <CategoryText>About Me</CategoryText>
        </Category>
      </Categories>
    </Container>
  );
};
export default SidebarPresenter;
