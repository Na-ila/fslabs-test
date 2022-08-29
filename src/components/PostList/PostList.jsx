import './postList.scss';

import PostListItem from './PostListItem';

import { useAppSelector } from '../../hooks/hooks';

const PostList = () => {
  const { postList } = useAppSelector((st) => st.postSlice);

  return (
    <div className="post_list_container">
      {postList.map((item) => (
        <PostListItem post={item} key={item.id} />
      ))}
    </div>
  );
};

export default PostList;
