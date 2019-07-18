import React from "react";
import HomePresenter from "./HomePresenter";

interface IProps {
  data: any;
}

const HomeContainer: React.FC<IProps> = ({ data }) => {
  return <HomePresenter data={data} />;
};
export default HomeContainer;
