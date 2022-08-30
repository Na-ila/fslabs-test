import { createSlice } from '@reduxjs/toolkit';

import { setWithExpiry } from '../App/config';

interface IState {
  postList: {
    title: string;
    text: string;
    img: string;
    date: string;
    id: string;
  }[];
  filters: {
    searchStr: string;
    dateFromLast: boolean;
  };
}

const initialState: IState = {
  postList: [],
  filters: {
    searchStr: '',
    dateFromLast: true,
  },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostList(state, { payload }) {
      state.postList = payload;

      setWithExpiry('postList', payload, 600000);
    },
    setSearchStr(state, { payload }) {
      state.filters.searchStr = payload;
    },
    setDateFromLast(state, { payload }) {
      state.filters.dateFromLast = payload;
    },
  },
});

export const { setPostList, setSearchStr, setDateFromLast } = postSlice.actions;

export default postSlice.reducer;
