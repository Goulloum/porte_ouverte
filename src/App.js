import Home from './Components/Home';
import Information from './Components/Information';
import Plan from './Components/Plan';
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
          <Route path='/Information'>
            <Information />
          </Route>
          <Route path='/Plan'>
            <Plan />
          </Route>
          <Route path='/Enregistrer'>
            <Enregistrer />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
