import Home from './Components/Home';
import Plan from './Components/Plan';
import Excel from './Components/Excel';
import Enregistrer from './Components/Enregistrer';
import './App.css';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Plan'>
            <Plan />
          </Route>
          <Route path='/Enregistrer'>
            <Enregistrer />
          </Route>
          <Route exact path="/Excel">
            <Excel />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
