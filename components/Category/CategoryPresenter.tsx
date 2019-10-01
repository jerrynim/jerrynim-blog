import * as React from "react";
import Link from "next/link";
import { FaPencilAlt, FaHammer, FaTags } from "react-icons/fa";
import Tree from "./Tree";
import styled from "../../style/typed-components";

const Container = styled.div`
  padding: 0px 15px;
  padding-top: 150px;
  a {
    color: ${props => props.theme.black_white};
    font-size: 18px;
    position: relative;
    svg {
      color: ${props => props.theme.black_white};
    }
    span {
      position: absolute;
      margin-left: 3px;
      top: 1px;
    }
  }
`;
const CategoryPresenter: React.FC = () => {
  return (
    <Container>
      <Tree
        name={
          <Link href="/">
            <a>
              <FaPencilAlt size={16} />
              <span>Posts</span>
            </a>
          </Link>
        }
      >
        <Tree
          name={
            <Link href="/">
              <a>
                <FaHammer size={16} />
                <span>Libarary</span>
              </a>
            </Link>
          }
        />
      </Tree>
      <Tree
        name={
          <Link href="/project">
            <a>🚀Project</a>
          </Link>
        }
      />
      <Tree
        name={
          <Link href="/aboutme">
            <a>😺Aboutme</a>
          </Link>
        }
      />
      <Tree
        name={
          <Link href="/tag">
            <a>
              <FaTags size={16} />
              <span>Tags</span>
            </a>
          </Link>
        }
      />
    </Container>
  );
};

export default CategoryPresenter;
