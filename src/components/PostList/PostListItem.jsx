import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

const PostListItem = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 345, width: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
        title={post.title}
        subheader={post.date}
      />
      {post.img && (
        <CardMedia
          component="img"
          height="194"
          image={post.img}
          alt="Paella dish"
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
