import React from "react";
import Link from "next/link";

const Index: React.FunctionComponent = () => {
  return (
    <div>
      <p>hello world</p>
      <Link href="/Counter">
        <a>Map</a>
      </Link>
    </div>
  );
};

export default Index;
