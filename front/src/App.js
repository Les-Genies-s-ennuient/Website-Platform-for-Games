import React from 'react';
import './app.css';
import LoggingPage from './components/login-page/login-page';
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
  const changeUser = event => setUser(event.target.value);

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
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoggingPage userUpdate = {changeUser}/>
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
