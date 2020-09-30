import React, { useState } from "react";
import randomUsersJSON from "./randomUsers.json";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";

function UserInfo(props) {
  const { id } = useParams();

  const currentUser = randomUsersJSON.find((user) => user.id == id);
  console.log(currentUser);

  return (
    <div class="userInfoContainer">
      <div id="picContainer">
        <Link to="/" className="link">
          <h1 id="arrow">⬅</h1>
        </Link>
        <img
          className="largePhoto"
          src={currentUser.picture.large}
          alt="user photo"
        ></img>
      </div>
      <p className="userDetail">
        👤 {currentUser.name.first} {currentUser.name.last}
      </p>
      <p className="userDetail">💌 {currentUser.email}</p>
      <p className="userDetail">📲 {currentUser.phone}</p>
      <p className="userDetail">
        🌍 {currentUser.location.city}, {currentUser.location.state}
      </p>
    </div>
  );
}

export default UserInfo;
