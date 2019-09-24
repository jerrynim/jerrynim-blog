import React from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import Switch from "react-switch";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Share from "../../static/header/share.svg";
import theme from "../../style/theme";
import styled from "../../style/typed-components";
import Halfmoon from "../../static/header/halfmoon.svg";

const Container = styled.div`
  transition: 0.2s ease-in-out;
  opacity: 0.8;
  z-index: 6;
  height: 56px;
  width: 100%;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-bottom: 1px solid ${props => props.theme.light_gray};
  background-color: ${props => props.theme.white_black};
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 24px;
    line-height: 28px;
    margin-left: 30px;
    margin-right: 35px;
    cursor: pointer;
    color: ${props => props.theme.text_color};
  }
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  .popup_wrapper {
  }
  .popup_shadow {
    background-color: ${props => props.theme.white_black};
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
    border-color: transparent transparent ${props => props.theme.white_black};
    border-style: solid;
    border-width: 0 10px 10px;
    height: 0;
    margin-top: 4px;
    width: 0;
    z-index: 12;
    margin-left: 2px;
  }
  .popup {
    height: fit-content;
    position: absolute;
    top: 55px;
    background-color: ${props => props.theme.white_black};
    margin-left: -214px;
    border: solid 1px #e6e6e6;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
    width: 280px;
    cursor: auto;

    img {
      padding: 16px;

      margin: auto;
      width: 100%;
      transform: rotateY(180deg);
      padding-bottom: 10px;
    }

    p {
      padding-left: 16px;
      color: ${props => props.theme.text_color};
    }
    .switch_wrapper {
      margin: 6px 12px 12px 0px;
      display: flex;
      justify-content: flex-end;
    }
    .react-switch {
      vertical-align: middle;
      margin-left: 4px;
    }
  }
  .icon_halfmoon {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    cursor: pointer;
    margin-top: 5px;
    fill: ${props => props.theme.black_yellow};
  }
  .icon_share {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: 40px;
    fill: ${props => props.theme.black_white};
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
  nightmode: boolean;
  toggleNightmode: any;
  popupStatus: boolean;
  setPopupStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderPresenter: React.FC<IProps> = ({
  path,
  nightmode,
  toggleNightmode,
  popupStatus,
  setPopupStatus
}) => (
  <>
    <Container>
      <Left>
        <Link href="/">
          <a>Jerrynim Blog</a>
        </Link>
      </Left>
      <Right>
        <div>
          <Halfmoon className="icon_halfmoon" onClick={() => setPopupStatus(!popupStatus)} />
          {popupStatus && (
            <OutsideClickHandler
              onOutsideClick={() => {
                setPopupStatus(false);
              }}
            >
              <div className="popup_wrapper">
                <div className="popup_shadow" />
                <div className="popup_triangle" />
                <div className="popup">
                  <img src="../../static/nightmodeImage.png" alt="" />
                  <p>You can change to night mode!</p>
                  <div className="switch_wrapper">
                    <Switch
                      checked={nightmode}
                      onChange={() => {
                        toggleNightmode(nightmode);
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
            </OutsideClickHandler>
          )}
        </div>
        <CopyToClipboard
          text={`https://jerrynim.com${path}`}
          onCopy={() => alert(`copied to clipboard https://jerrynim.com${path}`)}
        >
          <Share className="icon_share" />
        </CopyToClipboard>
      </Right>
    </Container>
  </>
);

export default HeaderPresenter;
