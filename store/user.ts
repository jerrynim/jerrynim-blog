import produce from 'immer';
import { createStandardAction } from 'typesafe-actions';
import { ActionType } from 'typesafe-actions';
import { getType } from 'typesafe-actions';
import { call, put, takeEvery } from 'redux-saga/effects';

const LOAD_USER = 'user/LOAD_USER';
const TRRIGER_CREATE_USER = 'user/TRRIGER_CREATE_USER';
const CREATE_USER = 'user/CREATE_USER';
const RESET_USER = 'user/RESET_USER';

const loadUser = createStandardAction(LOAD_USER)<string>();
const triggerCreateUser = createStandardAction(LOAD_USER)();
const createUser = createStandardAction(CREATE_USER)<{
  id: string;
  name: string;
  age: number;
  alias: string[];
}>();
const resetUser = createStandardAction(RESET_USER)<void>();

export type TriggerCreateUser = ActionType<typeof triggerCreateUser>;
export type LoadUser = ActionType<typeof loadUser>;
export type CreateUser = ActionType<typeof createUser>;
export type resetUser = ActionType<typeof resetUser>;

//Saga
// worker Saga: 비동기 증가 태스크를 수행할겁니다.

export interface User {
  id: string;
  name: string;
  age: number;
  alias: string[];
}
const initialState: User[] = [];

const user = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case getType(loadUser):
        return draft;

      case getType(createUser):
        draft.push(action.data);
        return;

      case getType(resetUser):
        return initialState;

      case getType(triggerCreateUser):
        return;

      default:
        return;
    }
  });
export default user;
