import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import TechPresenter from "./TechPresenter";
const TechContainer: React.FC = () => {
  const text: string = useSelector((state: any) => state.tech);
  const dispatch = useCallback(useDispatch(), []);
  console.log("rendered");
  return <TechPresenter text={text} dispatch={dispatch} />;
};

export default TechContainer;
