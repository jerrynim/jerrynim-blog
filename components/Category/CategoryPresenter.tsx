import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import Tree from "./Tree";

const Container = styled.div`
  padding: 0px 15px;
  padding-top: 150px;
  a {
    font-size: 24px;
  }
`;
const CategoryPresenter: React.FC = () => {
  return (
    <Container>
      <Tree
        name={
          <Link href="/">
            <a>Home</a>
          </Link>
        }
      >
        <Tree
          name={
            <Link href="/">
              <a>React</a>
            </Link>
          }
        />
      </Tree>
      <Tree
        name={
          <Link href="/">
            <a>Libarary</a>
          </Link>
        }
      />
      <Tree
        name={
          <Link href="/">
            <a>Project</a>
          </Link>
        }
      />
      <Tree
        name={
          <Link href="/">
            <a>Aboutme</a>
          </Link>
        }
      />
      <Tree
        name={
          <Link href="/">
            <a>Tags</a>
          </Link>
        }
      />
    </Container>
  );
};

export default CategoryPresenter;
