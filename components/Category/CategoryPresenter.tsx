import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaPencilAlt, FaHammer, FaTags } from "react-icons/fa";
import Tree from "./Tree";

const Container = styled.div`
  padding: 0px 15px;
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
          <Link href="/" prefetch={false}>
            <a>
              <FaPencilAlt size={16} />
              <span>Posts</span>
            </a>
          </Link>
        }
      >
        <Tree
          name={
            <Link href="/tag/Library" prefetch={false}>
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
          <Link href="/project" prefetch={false}>
            <a>🚀Project</a>
          </Link>
        }
      />
      <Tree
        name={
          <Link href="/aboutme" prefetch={false}>
            <a>😺Aboutme</a>
          </Link>
        }
      />
      <Tree
        name={
          <Link href="/tag" prefetch={false}>
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
