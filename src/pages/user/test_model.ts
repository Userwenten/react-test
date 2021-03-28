import {
    Effect,
    ImmerReducer,
    Subscription,
    history
} from 'umi';

export interface userStateType {
  username: string
}

export interface UserModelType {
  namespace: '',
  state: userStateType,
  effects: {},
  reducers: {},
  subscribtions: {}
}

const userModel:UserModelType = {
  namespace: '',
  state: {
    username: '',
  },
  effects: {},
  reducers: {},
  subscribtions: {}
}