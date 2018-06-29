import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './src/components/App';
import Home from './src/components/Home';
import Repos from './src/components/Repos';
import About from './src/components/About';
import User from './src/components/User';
import Contacts from './src/components/Contacts';

//Router路由設定
ReactDOM.render(
  ( <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/repos/:name' component={Repos}/>
        <Route path='/about' component={About}/>
        <Route path='/user' component={User}/>
        <Route path='/contacts' component={Contacts}/>
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
