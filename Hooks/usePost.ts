import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@apollo/react-hooks";
import { ReduxInitialState } from "../types/type";
import {
  changeTitle,
  changeSubTitle,
  changeThumbnail,
  changeContent,
  changeTags,
  changePassword
} from "../store/addPost";
import { CREATE_POST } from "../queries";

export default function usePost() {
  const { title, subTitle, thumbnail, content, tags, password } = useSelector(
    (state: ReduxInitialState) => state.addPost
  );
  const dispatch = useDispatch();

  /**
   * * 제목 변경 dispatch
   */
  const titleOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changeTitle(e.target.value));
  };
  /**
   * * 부제목 변경 dispatch
   */
  const subTitleOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changeSubTitle(e.target.value));
  };
  /**
   * * 썸네일 변경 dispatch
   */
  const thumbnailOnChange = (url: string) => {
    dispatch(changeThumbnail(url));
  };
  /**
   * * 내용 변경 dispatch
   */
  const contentOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    dispatch(changeContent(e.target.value));
  };
  /**
   * * 태그 변경 dispatch
   */
  const tagsOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changeTags(e.target.value));
  };
  /**
   * * 비밀번호 변경 dispatch
   */
  const passwordOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changePassword(e.target.value));
  };
  /**
   * * 이미지 넣기 변경 dispatch
   */
  const insertImage = (url: string) => {
    dispatch(changeContent(`${content}![](${url})`));
  };
  /**
   * * 포스트 업로드 Mutation
   */
  const [addPostMutation] = useMutation(CREATE_POST, {
    variables: {
      title,
      subTitle,
      tags,
      password,
      content,
      thumbnail
    }
  });
  return {
    title,
    subTitle,
    thumbnail,
    content,
    tags,
    password,
    titleOnChange,
    subTitleOnChange,
    thumbnailOnChange,
    contentOnChange,
    tagsOnChange,
    passwordOnChange,
    insertImage,
    addPostMutation
  };
}
