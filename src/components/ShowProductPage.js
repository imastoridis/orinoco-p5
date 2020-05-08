import React from 'react'
import ProductPage from './ProductPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

 function ShowProductPage() {
    //const newProduct = [products]
    //console.log(newProduct)
    let history = useHistory()
    
    function handleClick() {
      history.push(<ProductPage/>)
      return (
        <button type="button" onClick={handleClick}>
        Go home
      </button>
      )
    }
    
  }

  export default ShowProductPage