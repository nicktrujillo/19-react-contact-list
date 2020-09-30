import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import Home from "./Home";
import UserInfo from "./UserInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/userInfo/:id">
          <UserInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
