import React from 'react';
import './postInfo.scss';

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { setModalWindow, setPostList } from '../../../store/postSlice';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PostInfo = ({ type }) => {
  const dispatch = useAppDispatch();
  const { postList, modalWindow } = useAppSelector((state) => state.postSlice);

  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [file, setFile] = React.useState('');
  const [titleError, setTitleError] = React.useState(false);
  const [textError, setTextError] = React.useState(false);

  React.useEffect(() => {
    if (type === 'edit') {
      const post = postList.filter((item) => item.id === modalWindow.id)[0];

      setTitle(post.title);
      setText(post.text);
    }
  }, [postList, modalWindow.id, type]);

  const createPost = () => {
    if (!title) {
      setTitleError(true);
    } else if (!text) {
      setTextError(true);
    } else {
      const post = {
        id: postList.length + 1,
        title,
        text,
        date: new Date().toISOString().slice(0, 10),
        img: URL.createObjectURL(file[0]),
      };

      dispatch(setPostList([post, ...postList]));

      dispatch(
        setModalWindow({
          open: false,
          type: '',
          id: '',
        })
      );
    }
  };

  const editPost = () => {
    const index = postList.findIndex((item) => item.id === modalWindow.id);
    const post = postList.find((item) => item.id === modalWindow.id);

    const editedPost = {
      id: modalWindow.id,
      title,
      text,
      img: post.img,
      date: new Date().toISOString().slice(0, 10),
    };

    if (title !== post.title || text !== post.text) {
      dispatch(
        setPostList([
          ...postList.slice(0, index),
          editedPost,
          ...postList.slice(index + 1),
        ])
      );
    }

    dispatch(
      setModalWindow({
        open: false,
        type: '',
        id: '',
      })
    );
  };

  return (
    <div className="postInfo">
      <TextField
        id="outlined-basic"
        label="Заголовок"
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => {
          setTitleError(false);
          setTitle(e.target.value);
        }}
        className="textField"
        error={titleError}
      />
      <TextField
        id="outlined-basic"
        label="Текст"
        variant="outlined"
        size="small"
        value={text}
        onChange={(e) => {
          setTextError(false);
          setText(e.target.value);
        }}
        className="textField"
        error={textError}
        multiline
        rows={4}
      />
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setFile(e.target.files)}
      />
      <Button
        variant="contained"
        onClick={type === 'create' ? createPost : editPost}
      >
        {type === 'create' ? 'Создать' : 'Редактировать'}
      </Button>
    </div>
  );
};

export default PostInfo;
