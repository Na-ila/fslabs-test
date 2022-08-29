import './postList.scss';

import PostListItem from './PostListItem';

const data = [
  {
    id: 1,
    title: 'post 1',
    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    img: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
    date: new Date().toLocaleDateString('ru-RU'),
  },
  {
    id: 2,
    title: 'post 2',
    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    img: '',
    date: new Date().toLocaleDateString('ru-RU'),
  },
  {
    id: 3,
    title: 'post 3',
    text: 'This impressive paella is a perfect party dish and a fun meal to coo.',
    img: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
    date: new Date().toLocaleDateString('ru-RU'),
  },
];

const PostList = () => {
  return (
    <div className="post_list_container">
      {data.map((item) => (
        <PostListItem post={item} key={item.id} />
      ))}
    </div>
  );
};

export default PostList;
