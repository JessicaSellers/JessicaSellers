import React from 'react';
import './App.css';
import Home from './components/Home';
import Contacts from './projects/Contacts';
import Welcome from './projects/App-welcome';
import Saved from './projects/Saved';
import Techbot from './projects/Techbot';
import AutismAid from './projects/Autism-aid';
import Taproom from './projects/Taproom';
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/app-welcome" component={Welcome} />
        <Route path="/saved" component={Saved} />
        <Route path="/techbot" component={Techbot} />
        <Route path="/autism-aid" component={AutismAid} />
        <Route path="/taproom-page" component={Taproom} />
      </Switch>
    </HashRouter>
  );
}

export default App;