import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Comments from "../components/Comments";
import Link from "next/link";
export default class extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <p>Hello Next.js</p>
        <Footer />
        <Link as={`/Articles`} href={`/FullArticle?title=asdf`}>
          asdfasdf
        </Link>
        <Link as={`/FullArticle`} href={`/FullArticle?title=asdf`}>
          <a href="localhost:3000/FullArticle">Articles</a>
        </Link>
      </div>
    );
  }
}
