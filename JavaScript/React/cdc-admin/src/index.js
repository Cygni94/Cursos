import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AutorBox from './Autor'
import Home from './Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={App}>
      <Route path="/autor" component={AutorBox}/>
      <Route path="/livro"/>
    </Route>
  </div>
</Router>, document.getElementById('root'));
