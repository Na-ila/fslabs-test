import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [
    {
      id: 1,
      title: 'post 1',
      text: 'This if you like.',
      img: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
      date: '2017-01-25',
    },
    {
      id: 2,
      title: 'post 2',
      text: ' together with your guests. Add 1 cup of frozen peas along with the mussels.',
      img: '',
      date: '2017-01-27',
    },
    {
      id: 3,
      title: 'post 3',
      text: 'This impressive paella is a perfect party dish and a fun meal to coo.',
      img: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
      date: '2017-01-26',
    },
  ],
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
