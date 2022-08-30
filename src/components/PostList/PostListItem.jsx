import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

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

const PostListItem = ({ post, info }) => {
  const location = useLocation();

  return (
    <Card sx={{ maxWidth: 400, width: 400, boxShadow: info && 'none' }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <>
            <Tooltip title="Редактировать">
              <Link to={`/edit/${post.id}`} state={{ background: location }}>
                <IconButton aria-label="settings">
                  <EditIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Удалить">
              <Link to={`/delete/${post.id}`} state={{ background: location }}>
                <IconButton aria-label="settings">
                  <DeleteIcon />
                </IconButton>
              </Link>
            </Tooltip>
          </>
        }
        title={post.title}
        subheader={new Date(post.date).toLocaleDateString('ru-RU')}
      />
      <Link to={`/post/${post.id}`} state={{ background: location }}>
        <div className="post_content">
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
        </div>
      </Link>
    </Card>
  );
};

export default PostListItem;
