import React, { useCallback } from "react";
import ProjectPresenter from "./ProjectPresenter";
import { useSelector, useDispatch } from "react-redux";

const ProjectContainer = () => {
  const project: string = useSelector((state: any) => state.project);
  const dispatch = useCallback(useDispatch(), []);
  return <ProjectPresenter project={project} dispatch={dispatch} />;
};
export default ProjectContainer;
