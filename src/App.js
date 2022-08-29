import React from 'react';
import './app.scss';
import posts from './postList.json';

import { useAppDispatch } from './hooks/hooks';
import { setPostList } from './store/postSlice';

import Title from './components/Title';
import Filters from './components/Filters';
import PostList from './components/PostList';
import Actions from './components/Actions';
import ModalWindow from './components/ModalWindow';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setPostList(posts));
  }, [dispatch]);

  return (
    <div className="app">
      <div className="header">
        <Title />
        <div className="control_panel">
          <Filters />
          <Actions />
        </div>
      </div>
      <PostList />
      <ModalWindow />
    </div>
  );
}

export default App;
