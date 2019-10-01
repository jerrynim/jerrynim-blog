import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import dynamic from "next/dynamic";
import styled from "../../style/typed-components";
import theme from "../../style/theme";

const Category = dynamic(() => import("../Category"), { ssr: false });

const Container = styled.div<{ status: boolean }>`
  z-index: 7;
  position: fixed;
  height: 100%;
  width: 280px;
  transform: ${props => (props.status ? "" : "translateX(-280px)")};
  transition: 0.4s ease-in-out;
  background-color: white;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.gradient};
  }

  .title_wrapper {
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .title {
    opacity: ${props => (props.status ? "1" : "0")};
    transition: 1.5s ease-in-out;
    color: ${props => props.theme.black_white};
    margin-left: 30px;
    font-size: 24px;
    line-height: 28px;
    margin-top: 14px;
  }

  .toggle_button {
    position: absolute;
    bottom: 200px;
    right: -35px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    background-color: ${theme.black};
    p {
      color: white;
      transform: rotate(-90deg);
      font-size: 20px;
      padding-top: 20px;
    }
  }

  .bottom {
    position: absolute;
    height: 48px;
    display: flex;
    justify-content: space-around;
    bottom: 0;
    width: 100%;
    padding: 0px 30px;
    align-items: center;
    border-top: 2px solid ${theme.light_gray};

    svg {
      color: ${props => props.theme.black_white};
    }
  }
`;

interface IProps {
  status: boolean;
  toggleStatus: Dispatch<SetStateAction<boolean>>;
}

const SidebarPresenter: React.FC<IProps> = ({ status, toggleStatus }) => (
  <Container status={status}>
    <div className="background">
      <div className="title_wrapper">
        <Link href="/">
          <a className="title">Jerrynim Blog</a>
        </Link>
      </div>
      <Category />
      <div className="bottom">
        <Link href="https://github.com/jerrynim" prefetch={false}>
          <a>
            <GoMarkGithub size={24} />
          </a>
        </Link>
        <IoMdMail size={24} />
      </div>
    </div>
    <div role="button" onClick={() => toggleStatus(!status)} className="toggle_button">
      <p>{status ? "close" : "open"}</p>
    </div>
  </Container>
);

export default SidebarPresenter;
