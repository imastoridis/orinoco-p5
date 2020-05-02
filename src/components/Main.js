import React, { Component } from 'react';
import '../../index.css';
import {Route, Switch} from 'react-router-dom'
//import { ProductPage, HomePage, ConfirmationPage } from '../../js/components';
import HomePage from './HomePage';
import ProductPage from '../../js/components/ProductPage';


function Main() {
  return (
    <div>
      <HomePage />
      </div>
    /*<>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route exact path="/product-page" component={ProductPage} />
      <Route exact path="/product-page/:slug" component={ProductPage} />
    </Switch>
  
    </>*/
  );
}

export default Main;

