import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Comments from "../components/Comments";
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
      </div>
    );
  }
}
