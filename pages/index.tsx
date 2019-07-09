import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default class extends React.Component<any, any> {
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
