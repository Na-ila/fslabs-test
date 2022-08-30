import React from 'react';
import './postForm.scss';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { setPostList } from '../../../store/postSlice';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface IPostFormProps {
  type: 'edit' | 'create';
}

const PostForm = ({ type }: IPostFormProps) => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { postList } = useAppSelector((state) => state.postSlice);

  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [file, setFile] = React.useState('');
  const [titleError, setTitleError] = React.useState(false);
  const [textError, setTextError] = React.useState(false);

  React.useEffect(() => {
    if (type === 'edit') {
      const post = postList.filter((item) => item.id === params.id)[0];

      setTitle(post.title);
      setText(post.text);
      setFile(post.img);
    }
  }, [params.id, postList, type]);

  const createPost = () => {
    if (!title) {
      setTitleError(true);
    } else if (!text) {
      setTextError(true);
    } else {
      const post = {
        id: uuidv4(),
        title,
        text,
        date: new Date().toISOString(),
        img: file,
      };

      dispatch(setPostList([post, ...postList]));

      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  const editPost = () => {
    const index = postList.findIndex((item) => item.id === params.id);
    const post = postList.find((item) => item.id === params.id);

    if (title !== post?.title || text !== post?.text || file !== post?.img) {
      const editedPost = {
        id: params.id,
        title,
        text,
        img: file,
        date: new Date().toISOString(),
      };

      dispatch(
        setPostList([
          ...postList.slice(0, index),
          editedPost,
          ...postList.slice(index + 1),
        ])
      );
    }

    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="postForm">
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
        onChange={(e) => {
          if (!e.target.files) return;
          setFile(URL.createObjectURL(e.target.files[0]));
        }}
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

export default PostForm;
