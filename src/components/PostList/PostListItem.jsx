import * as React from 'react';

import { useAppDispatch } from '../../hooks/hooks';
import { setModalWindow } from '../../store/postSlice';

import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const PostListItem = ({ post }) => {
  const dispatch = useAppDispatch();

  const deletePost = () => {
    dispatch(
      setModalWindow({
        open: true,
        type: 'delete',
        id: post.id,
      })
    );
  };

  const editPost = () => {
    dispatch(
      setModalWindow({
        open: true,
        type: 'edit',
        id: post.id,
      })
    );
  };

  return (
    <Card sx={{ maxWidth: 345, width: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <>
            <Tooltip title="Редактировать">
              <IconButton aria-label="settings" onClick={editPost}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Удалить">
              <IconButton aria-label="settings" onClick={deletePost}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        }
        title={post.title}
        subheader={new Date(post.date).toLocaleDateString('ru-RU')}
      />
      {post.img && (
        <CardMedia
          component="img"
          height="194"
          image={post.img}
          alt={post.title}
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostListItem;
