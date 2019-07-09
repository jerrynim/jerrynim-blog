import Articles from "../components/Articles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Articles />
      <Footer />
    </>
  );
};
export default App;
