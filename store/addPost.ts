import produce from "immer";
import { createStandardAction, ActionType } from "typesafe-actions";
import { AddPost } from "../types/type";

//type정의
const GET_POST = "post/GET_POST";
const CHANGE_TITLE = "post/CHANGE_TITLE";
const CHANGE_SUBTITLE = "post/CHANGE_SUBTITLE";
const CHANGE_THUMBNAIL = "post/CHANGE_THUMBNAIL";
const CHANGE_CONTENT = "post/CHANGE_CONTENT";
const CHANGE_TAGS = "post/CHANGE_TAGS";
const CHANGE_PASSWORD = "post/CHANGE_PASSWORD";

//action생성
export const getPost = createStandardAction(GET_POST)<null>();
export const changeTitle = createStandardAction(CHANGE_TITLE)<string>();
export const changeSubTitle = createStandardAction(CHANGE_SUBTITLE)<string>();
export const changeThumbnail = createStandardAction(CHANGE_THUMBNAIL)<string>();
export const changeContent = createStandardAction(CHANGE_CONTENT)<string>();
export const changeTags = createStandardAction(CHANGE_TAGS)<string>();
export const changePassword = createStandardAction(CHANGE_PASSWORD)<string>();

//액션 타입정의
export type GET_POST = ActionType<typeof getPost>;
export type CHANGE_TITLE = ActionType<typeof changeTitle>;
export type CHANGE_SUBTITLE = ActionType<typeof changeSubTitle>;
export type CHANGE_THUMBNAIL = ActionType<typeof changeThumbnail>;
export type CHANGE_CONTENT = ActionType<typeof changeContent>;
export type CHANGE_TAGS = ActionType<typeof changeTags>;
export type CHANGE_PASSWORD = ActionType<typeof changePassword>;

type Actions =
  | GET_POST
  | CHANGE_TITLE
  | CHANGE_SUBTITLE
  | CHANGE_SUBTITLE
  | CHANGE_THUMBNAIL
  | CHANGE_CONTENT
  | CHANGE_TAGS
  | CHANGE_PASSWORD;

const initialState: AddPost = {
  id: "",
  title: "",
  subTitle: "",
  thumbnail: "",
  tags: "",
  content: "",
  password: ""
};

const addPost = (state = initialState, action: Actions) =>
  produce(state, draft => {
    switch (action.type) {
      case "post/CHANGE_TITLE":
        draft.title = action.payload;
        return draft;
      case "post/CHANGE_SUBTITLE":
        draft.subTitle = action.payload;
        return draft;
      case "post/CHANGE_THUMBNAIL":
        draft.thumbnail = action.payload;
        return draft;
      case "post/CHANGE_CONTENT":
        draft.content = action.payload;
        return draft;
      case "post/CHANGE_TAGS":
        draft.tags = action.payload;
        return draft;
      case "post/CHANGE_PASSWORD":
        draft.password = action.payload;
        return draft;
      default:
        return draft;
    }
  });
export default addPost;
