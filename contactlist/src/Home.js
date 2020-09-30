import React, { useState } from "react";
import randomUsersJSON from "./randomUsers.json";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";

function Home(props) {
  const [users, setUsers] = useState(randomUsersJSON);
  return (
    <div id="homeContainer">
      <h1 id="peeps">my peeps</h1>
      {users.map((item) => (
        <div className="userList">
          <Link to={`/userinfo/${item.id}`} key={item.id} className="link">
            <img
              className="smallPhoto"
              src={item.picture.thumbnail}
              alt="user photo"
            ></img>
            {item.name.first} {item.name.last}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
