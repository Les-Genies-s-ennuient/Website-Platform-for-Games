import React from 'react';
import './App.css';
import CreateGameComponent from './components/create-game/create-game';
import LoggingPage from './components/login-page/login-page';
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [user, setUser] = React.useState(
    localStorage.getItem('myUser') || ''
  );
  React.useEffect(() => {
    localStorage.setItem('myUser', user);
  }, [user]);
  const changeUser = (event: any) => setUser(event.target.value);

  return (
    <Router>
      <div>
        {user}
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">New Game</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ userUpdate: (event: any) => void; }' is no... Remove this comment to see the full error message */}
            <LoggingPage userUpdate = {changeUser}/>
          </Route>
          <Route path="/game">
            <CreateGameComponent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
