import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxInitialState } from "../types/type";
import {
  changeTitle,
  changeSubTitle,
  changeThumbnail,
  changeContent,
  changeTags,
  changePassword
} from "../store/addPost";

export default function usePost() {
  const { title, subTitle, thumbnail, content, tags, password } = useSelector(
    (state: ReduxInitialState) => state.addPost
  );
  const dispatch = useDispatch();

  const titleOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changeTitle(e.target.value));
  };
  const subTitleOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changeSubTitle(e.target.value));
  };
  const thumbnailOnChange = (url: string) => {
    dispatch(changeThumbnail(url));
  };
  const contentOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    dispatch(changeContent(e.target.value));
  };
  const tagsOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changeTags(e.target.value));
  };
  const passwordOnChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changePassword(e.target.value));
  };
  const insertImage = (url: string) => {
    dispatch(changeContent(`${content}<div class="image-wrapper"><img src="${url}" alt="${url}" /></div>`));
  };
  return {
    title: {
      value: title,
      onChange: titleOnChange
    },
    subTitle: {
      value: subTitle,
      onChange: subTitleOnChange
    },
    thumbnail: {
      value: thumbnail,
      onChange: thumbnailOnChange
    },
    content: {
      value: content,
      onChange: contentOnChange,
      insertImage
    },
    tags: {
      value: tags,
      onChange: tagsOnChange
    },
    password: {
      value: password,
      onChange: passwordOnChange
    }
  };
}
