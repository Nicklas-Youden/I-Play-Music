import './App.css';
import {Router} from "@reach/router"
import Welcome from './pages/Welcome';
import Featured from './pages/Featured';
import Player from './pages/Player';
import Playlist from './pages/Playlist';


function App() {
  return (
    <Router>
      <Featured path="/"></Featured>
      <Welcome path="/welcome"/>
      <Player path="/player"/>
      <Playlist path="playlist"/>
      
    </Router>
  );
}

export default App;
