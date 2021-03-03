import "./App.css";
import { Router } from "@reach/router";
import Welcome from "./pages/Welcome";
import Featured from "./pages/Featured";
import Player from "./pages/Player";
import Playlist from "./pages/Playlist";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import TokenContext from "./contexts/TokenContext";
import { useState } from "react";

function App() {
  var tokenState = useState(null);
  return (
    <TokenContext.Provider value={tokenState}>
      <Router>
        <Login default />
        <Callback path="/callback" />
        <Featured path="/featured"></Featured>
        <Welcome path="/welcome" />
        <Player path="/player" />
        <Playlist path="playlist" />
      </Router>
    </TokenContext.Provider>
  );
}

export default App;
