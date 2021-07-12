import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'
import StatsPage from './pages/StatsPage'
import AddFeedPage from './pages/AddFeedPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/stats">
            <StatsPage />
          </Route>
          <Route exact path="/add">
            <AddFeedPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
