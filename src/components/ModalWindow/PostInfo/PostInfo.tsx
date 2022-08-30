import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/hooks';

import PostListItem from '../../PostList/PostListItem';

interface IPostData {
  title: string;
  text: string;
  img: string;
  date: string;
  id: string;
  prevState?: null;
}

const PostInfo = () => {
  const { postList } = useAppSelector((st) => st.postSlice);
  const params = useParams();
  const [post, setPost] = React.useState<IPostData | null>(null);

  React.useEffect(() => {
    setPost(postList.filter((item) => item.id === params.id)[0]);
  }, [params.id, postList]);

  return post && <PostListItem post={post} info />;
};

export default PostInfo;
