import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h2>My Projects</h2>
      <p>Following are the <strong>github</strong> links of some of my practice applications:</p>
      <ul>
        <h3>
          <a href="https://github.com/itsmefarhan/flutter-space-x-api">
            Flutter SpaceX API
          </a>
        </h3>
        <li>
          Fetches "launches" data from{" "}
          <a href="https://api.spacexdata.com/v3/launches">
            https://api.spacexdata.com/v3/launches
          </a>
        </li>
        <li>
          Enables user to search for a specific launch by its mission name
        </li>
        <h3>
          <a href="https://github.com/itsmefarhan/Social-network-gql">
            A simple Social Network with MERN and GraphQL
          </a>
        </h3>
        <li>Authentication</li>
        <li>Posts (create, read and delete)</li>
        <li>Post like and unlike Comments (create and delete)</li>
        <li>Comments (create and delete)</li>

        <h3>
          <a href="https://github.com/itsmefarhan/reactnative-social-network">
            React Native Social Network with Firebase
          </a>
        </h3>

        <li>Authentication</li>
        <li>
          Posts (create, read and delete) with image/audio/video upload to
          firebase storage
        </li>
        <li>Post like and unlike</li>
        <li>Comments (create and delete)</li>
      </ul>
    </div>
  );
}

export default App;
