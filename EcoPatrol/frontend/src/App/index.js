import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {MapPage} from '../pages/MapPage'
import {StationPage} from '../pages/StationPage'
import Header from '../components/Header'
import './style.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        <Route path={'/'} exact component = {MapPage} />
        <Route path={'/station'} component={StationPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
