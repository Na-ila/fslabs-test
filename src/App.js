import React from 'react';
import './app.scss';
import posts from './postList.json';
import { v4 as uuidv4 } from 'uuid';

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
    dispatch(
      setPostList(
        posts.map((item) => {
          return {
            ...item,
            id: uuidv4(),
          };
        })
      )
    );
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
