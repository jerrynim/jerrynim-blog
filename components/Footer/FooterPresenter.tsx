import React from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { IoLogoYoutube } from "react-icons/io";
const Container = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.black};
  align-items: center;
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 300px;
`;
const Text = styled.div`
  color: white;
`;
const FooterPresenter: React.FC = () => {
  return (
    <Container>
      <Text>Jerrynim ©</Text>
      <Icons>
        <IoLogoYoutube size={42} color={"white"} />
        <GoMarkGithub size={42} color={"white"} />
        <img
          src="../../static/wantedWhite.png"
          width={"42px"}
          height={"42px"}
        />
        <img
          src="../../static/rocketPunchWhite.png"
          width={"42px"}
          height={"42px"}
        />
      </Icons>
      <Text>Thanks</Text>
    </Container>
  );
};
export default FooterPresenter;
