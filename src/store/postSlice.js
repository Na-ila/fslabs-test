import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
  filters: {
    searchStr: '',
    dateFromLast: true,
  },
  modalWindow: {
    open: false,
    type: '',
    id: '',
  },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostList(state, { payload }) {
      state.postList = payload;
    },
    setSearchStr(state, { payload }) {
      state.filters.searchStr = payload;
    },
    setDateFromLast(state, { payload }) {
      state.filters.dateFromLast = payload;
    },
    setModalWindow(state, { payload }) {
      state.modalWindow = payload;
    },
  },
});

export const { setPostList, setSearchStr, setDateFromLast, setModalWindow } =
  postSlice.actions;

export default postSlice.reducer;
