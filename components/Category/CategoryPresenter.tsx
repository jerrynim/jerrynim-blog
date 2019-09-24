import * as React from "react";
import Link from "next/link";
import Tree from "./Tree";
import styled from "../../style/typed-components";

const Container = styled.div`
  padding: 0px 15px;
  padding-top: 150px;
  a {
    color: ${props => props.theme.black_white};
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
