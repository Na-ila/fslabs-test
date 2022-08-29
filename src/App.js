import './app.scss';

import Title from './components/Title';
import Filters from './components/Filters';
import PostList from './components/PostList';
import Actions from './components/Actions';

function App() {
  return (
    <div className="app">
      <Title />
      <div className="control_panel">
        <Filters />
        <Actions />
      </div>
      <PostList />
    </div>
  );
}

export default App;
