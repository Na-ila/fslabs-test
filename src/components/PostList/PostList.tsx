import './postList.scss';

import PostListItem from './PostListItem';

import { useAppSelector } from '../../hooks/hooks';

const PostList = () => {
  const { postList, filters } = useAppSelector((st) => st.postSlice);

  return (
    <div className="post_list_container">
      {postList
        .filter((item) =>
          (item.title + item.text)
            .toLowerCase()
            .includes(filters.searchStr.toLowerCase())
        )
        .sort((a, b) => {
          if (!filters.dateFromLast)
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
        .map((item) => (
          <PostListItem post={item} key={item.id} />
        ))}
    </div>
  );
};

export default PostList;
