import logo from './logo.svg';
import Home from "./pages/home"
import ViewPost from "./pages/view_post"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header";
import Registration from "./pages/registration";
import Authorization from "./pages/authorization";
import RestorePassword from "./pages/restore_password";

function App() {
  return (
      <div>
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
            <li>
                <Link to="/view_post">View post</Link>
            </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/authorization">Authorization</Link>
          </li>
          <li>
            <Link to="/restore_password">restore_password</Link>
          </li>
        </ul>
      </nav>

       {/*A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL.*/}
      <Switch>
        <Route path="/about">
          <div>About</div>
        </Route>
        <Route path="/users">
          <div>Users</div>
        </Route>
          <Route path="/view_post">
              <ViewPost/>
          </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route path="/authorization">
          <Authorization/>
        </Route>
        <Route path="/restore_password">
          <RestorePassword/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
      </div>
  );
}

export default App;
