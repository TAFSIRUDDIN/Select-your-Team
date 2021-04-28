import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import TeamDetailes from './Components/TeamDetailes/TeamDetailes';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
    
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/team/:teamId">
          <TeamDetailes></TeamDetailes>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    
  </Router>

  );
}

export default App;
