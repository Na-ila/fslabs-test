import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [
    {
      id: 1,
      title: 'post 1',
      text: 'This if you like.',
      img: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
      date: new Date().toLocaleDateString('ru-RU'),
    },
    {
      id: 2,
      title: 'post 2',
      text: ' together with your guests. Add 1 cup of frozen peas along with the mussels.',
      img: '',
      date: new Date().toLocaleDateString('ru-RU'),
    },
    {
      id: 3,
      title: 'post 3',
      text: 'This impressive paella is a perfect party dish and a fun meal to coo.',
      img: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
      date: new Date().toLocaleDateString('ru-RU'),
    },
  ],
  filters: {
    searchStr: '',
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
  },
});

export const { setPostList, setSearchStr } = postSlice.actions;

export default postSlice.reducer;
