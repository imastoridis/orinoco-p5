import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/HomePage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import * as serviceWorker from './serviceWorker';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import ConfirmationPage from './components/ConfirmationPage';



ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/productPage/:_id' component={ProductPage} />
        <Route path='/productPage' component={ProductPage} />
        <Route path='/cartPage' component={CartPage} />
        <Route path='/confirmationPage' component={ConfirmationPage}/>
       
        
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
