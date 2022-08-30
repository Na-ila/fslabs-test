import React from 'react';
import './app.scss';
import posts from './postList.json';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route, useLocation } from 'react-router-dom';

import { useAppDispatch } from './hooks/hooks';
import { setPostList } from './store/postSlice';

import Title from './components/Title';
import Filters from './components/Filters';
import PostList from './components/PostList';
import Actions from './components/Actions';
import ModalWindow from './components/ModalWindow';

let didInit = false;

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  React.useEffect(() => {
    if (!didInit) {
      didInit = true;

      if (localStorage.getItem('postList')) {
        dispatch(setPostList(JSON.parse(localStorage.getItem('postList'))));
      } else {
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
      }
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Routes location={background || location}>
        <Route path="/popo" element={<div>kmlkmlm</div>} />
        <Route
          path="/"
          element={
            <>
              <div className="header">
                <Title />
                <div className="control_panel">
                  <Filters />
                  <Actions />
                </div>
              </div>
              <PostList />
            </>
          }
        >
          <Route path="/create" element={<ModalWindow />} />
          <Route path="/edit/:id" element={<ModalWindow />} />
          <Route path="/delete/:id" element={<ModalWindow />} />
          <Route path="/post/:id" element={<ModalWindow />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/create" element={<ModalWindow />} />
          <Route path="/edit/:id" element={<ModalWindow />} />
          <Route path="/delete/:id" element={<ModalWindow />} />
          <Route path="/post/:id" element={<ModalWindow />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
