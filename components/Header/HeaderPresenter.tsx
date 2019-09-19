import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { IoIosSunny } from "react-icons/io";
import Switch from "react-switch";
import { CopyToClipboard } from "react-copy-to-clipboard";
import theme from "../../style/theme";

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
  .popup_wrapper {
  }
  .popup_shadow {
    background: #fff;
    border: 1px solid #e6e6e6;
    -webkit-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
    height: 14px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 14px;
    margin-left: 5px;
    margin-top: 5px;
    position: absolute;
  }
  .popup_triangle {
    position: absolute;
    border-color: transparent transparent #fff;
    border-style: solid;
    border-width: 0 10px 10px;
    height: 0;
    margin-top: 4px;
    width: 0;
    z-index: 12;
    margin-left: 2px;
  }
  .popup {
    position: absolute;
    top: 55px;
    background: #fff;
    margin-left: -214px;
    border: solid 1px #e6e6e6;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
    width: 280px;
    height: 200px;
    cursor: auto;
    padding: 16px;

    img {
      margin: auto;
      width: 100%;
      transform: rotateY(180deg);
      padding-bottom: 10px;
    }

    p {
    }
    .switch_wrapper {
      margin-top: 4px;
      display: flex;
      justify-content: flex-end;
    }
    .react-switch {
      vertical-align: middle;
      margin-left: 4px;
    }
  }
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    cursor: pointer;
    :last-child {
      margin-right: 40px;
    }
  }
`;

const CheckedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 15;
  color: orange;
  padding-right: 2;
  padding-top: 3px;
`;
const UnCheckedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 15;
  color: orange;
  padding-right: 2;
  .switch_text {
    color: ${theme.black};
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8px;
    padding-left: 3px;
  }
`;

interface IProps {
  path: string;
}

const a = true;
const HeaderPresenter: React.FC<IProps> = ({ path }) => (
  <>
    <Container>
      <Left>
        <Link href="/">
          <a>Jerrynim Blog</a>
        </Link>
      </Left>
      <Right>
        <div>
          <img className="icon" src="../../static/halfmoon.svg" alt="" />
          <div className="popup_wrapper">
            <div className="popup_shadow" />
            <div className="popup_triangle" />
            <div className="popup">
              <img src="../../static/nightmodeImage.png" alt="" />
              <p>You can change to night mode!</p>
              <div className="switch_wrapper">
                <Switch
                  checked={a}
                  onChange={() => {
                    console.log("hi");
                  }}
                  className="react-switch"
                  offColor={theme.black}
                  onColor={theme.orange}
                  height={25}
                  width={60}
                  uncheckedIcon={<CheckedIcon>☾</CheckedIcon>}
                  checkedIcon={
                    <UnCheckedIcon>
                      <span className="switch_text">🕶</span>
                    </UnCheckedIcon>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <CopyToClipboard
          text={`https://jerrynim.com${path}`}
          onCopy={() => alert(`copied to clipboard https://jerrynim.com${path}`)}
        >
          <img className="icon" src="../../static/shareIcon.png" alt="" />
        </CopyToClipboard>
      </Right>
    </Container>
  </>
);

export default HeaderPresenter;
