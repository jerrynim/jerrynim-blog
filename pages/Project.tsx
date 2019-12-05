import React from "react";
import Project from "../components/Project";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const App: React.FC = () => (
  <>
    <Header />
    <Sidebar />
    <Project />
  </>
);
export default App;
