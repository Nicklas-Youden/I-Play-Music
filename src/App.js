import './App.css';
import {Router} from "@reach/router"
import Welcome from './pages/Welcome';
import Featured from './pages/Featured';
import Player from './pages/Player';


function App() {
  return (
    <Router>
      <Featured path="/"></Featured>
      <Welcome path="/welcome"/>
      <Player path="/player"/>
      
    </Router>
  );
}

export default App;
