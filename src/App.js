import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Write from './pages/Write';
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        {/* <Home exact path="/" component={Home} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/write" component={Write} />
    </Router>
  );
}

export default App;
