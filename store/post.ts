import produce from "immer";
import { createStandardAction, ActionType, getType } from "typesafe-actions";
import { put, takeEvery } from "redux-saga/effects";
import { Post } from "../types/type";

//type정의
const GET_POST = "post/GET_POST";

//action생성
const getPost = createStandardAction(GET_POST)<null>();

//액션 타입정의
export type GETPOST = ActionType<typeof getPost>;

type Actions = GETPOST;

const initialState: Post = {
  id: "",
  title: "",
  subTitle: "",
  thumbnail: "",
  content: ""
};

const post = (state = initialState, action: Actions) =>
  produce(state, draft => {
    switch (action.type) {
      default:
    }
  });
export default post;
