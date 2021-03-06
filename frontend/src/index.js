import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ConfirmationPage from './components/ConfirmationPage';
import CartPage from './components/CartPage';
import history from './components/history';
import * as serviceWorker from './serviceWorker';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Switch history={history}>
        <Route path='/' exact component={Homepage} />
        <Route exact path='/productPage/:_id' component={ProductPage} />
        <Route path='/productPage' component={Homepage} />
        <Route path='/cartpage' component={CartPage} />
        <Route path='/confirmationpage' component={ConfirmationPage}/>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
