import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { FILE_UPLOAD } from "../queries/upload";
import usePost from "./usePost";

const useUpload = () => {
  const { insertImage: inserImageDispatch, thumbnailOnChange: thumbnailOnChangeDispatch } = usePost();
  /**
   * * 파일 업로드 Mutation
   */
  const [fileUploadMuation] = useMutation<{ singleUpload: string }>(FILE_UPLOAD);
  /**
   * * thumbnail input 파일 변경시
   */
  const thumbnailOnChange: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const file = e.target.files![0];
    const result = fileUploadMuation({ variables: { file } });
    result.then(res => thumbnailOnChangeDispatch(res.data.singleUpload));
  };
  /**
   * * content 에 image 링크 넣기
   */
  const insertImage: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const file = e.target.files[0];
    const result = fileUploadMuation({ variables: { file } });
    result.then(res => inserImageDispatch(res.data.singleUpload));
  };
  return { insertImage, thumbnailOnChange };
};
export default useUpload;
