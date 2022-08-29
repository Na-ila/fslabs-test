import './app.scss';

import Title from './components/Title';
import Filters from './components/Filters';
import PostList from './components/PostList';

function App() {
  return (
    <div className="app">
      <Title />
      <Filters />
      <PostList />
    </div>
  );
}

export default App;
