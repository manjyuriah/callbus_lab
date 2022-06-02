import './App.css';
import List from './pages/List';
import Post from './pages/Post';
import New from './pages/New';
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        {/* <Home exact path="/" component={Home} /> */}
        <Route exact path="/" component={List} />
        <Route exact path="/community/post/" component={Post} />
        <Route exact path="/community/post/new" component={New} />
    </Router>
  );
}

export default App;
