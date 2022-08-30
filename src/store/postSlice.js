import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
      localStorage.setItem('postList', JSON.stringify(payload));
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
