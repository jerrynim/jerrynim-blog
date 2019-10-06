import React, { useEffect } from "react";

import usePost from "../../Hooks/usePost";
import AddPostPresenter from "./AddPostPresenter";

const AddPostContainer: React.FC = () => {
  const { title, subTitle, thumbnail, content, tags, password } = usePost();
  useEffect(() => {}, []);

  return <AddPostPresenter />;
};
export default AddPostContainer;
