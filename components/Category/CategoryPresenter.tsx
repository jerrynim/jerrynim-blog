import * as React from "react";
import Link from "next/link";
import Tree from "./Tree";

const CategoryPresenter: React.FC = () => {
  return (
    <>
      <Tree
        name={() => (
          <Link href="/">
            <a>main</a>
          </Link>
        )}
        defaultOpen
      >
        <Tree name="hello" />
        <Tree name="subtree with children">
          <Tree name="hello" />
          <Tree name="sub-subtree with children">
            <Tree name="child 1" style={{ color: "#37ceff" }} />
            <Tree name="child 2" style={{ color: "#37ceff" }} />
            <Tree name="child 3" style={{ color: "#37ceff" }} />
            <Tree name="custom content">
              <div style={{ position: "relative", width: "100%", height: 200, padding: 10 }}>
                <div
                  style={{ width: "100%", height: "100%", background: "black", borderRadius: 5 }}
                />
              </div>
            </Tree>
          </Tree>
          <Tree name="hello" />
        </Tree>
        <Tree name="world" />
        <Tree
          name={() => (
            <span role="img" aria-label="cat">
              🙀 something something
            </span>
          )}
        />
      </Tree>
    </>
  );
};

export default CategoryPresenter;
