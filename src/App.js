import React from 'react';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/index'
import TrackInfo from './components/tracks/TrackInfo'
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path ="/song/:id" component={TrackInfo}/>
          
          </Switch>

        </div>
     
      </Router>

    </Provider>
    
    
    
  );
}

export default App;
