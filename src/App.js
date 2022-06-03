import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import List from './pages/List';
import Post from './pages/Post';
import New from './pages/New';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/community/post/" element={<Post />} />
        <Route path="/community/post/new" element={<New />} />
      </Routes>
    </Router>
  );
}

export default App;
