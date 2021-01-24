import './App.css';
import {Router} from "@reach/router"
import Welcome from './pages/Welcome';


function App() {
  return (
    <Router>
      <Welcome path="/"/>
    </Router>
  );
}

export default App;
