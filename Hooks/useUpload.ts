import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { FILE_UPLOAD } from "../queries/upload";
import usePost from "./usePost";

const useUpload = () => {
  const { thumbnail, content } = usePost();
  const [fileUploadMuation] = useMutation<{ singleUpload: string }>(FILE_UPLOAD);
  const thumbnailOnChange: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const file = e.target.files![0];
    const result = fileUploadMuation({ variables: { file } });
    result.then(res => thumbnail.onChange(res.data.singleUpload));
  };
  const insertImage: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const file = e.target.files[0];
    const result = fileUploadMuation({ variables: { file } });
    result.then(res => content.insertImage(res.data.singleUpload));
  };
  return { insertImage, thumbnailOnChange };
};
export default useUpload;
