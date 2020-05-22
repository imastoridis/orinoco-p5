import React from 'react'
import {
    Link,
  } from "react-router-dom";

function Header() {
    //If panier is empty then renders an empty cartPage
    function click() {
        var allItems = JSON.parse(localStorage.getItem("allItems"));
        var allVarnishOption = JSON.parse(localStorage.getItem("allVarnishOption"));
        if(allItems == null && allVarnishOption == null) {
        let allVarnishOption = []
        let allItems = []
        localStorage.setItem("allVarnishOption", JSON.stringify(allVarnishOption))
        localStorage.setItem("allItems", JSON.stringify(allItems))
        }
    }
    return (
        <div>
            <nav >
                <div className="navbar">
                    <ul className="nav__list-ul">
                        <li className="nav__list-li-left">
                            <h1 className="logo">Oniroco</h1>
                        </li>
                        <li className="nav__list-li">
                            <div className="link"> 
                                <Link to={'/cartpage'} className="navbar__style">
                                    <h2 onClick={click} className="hover">panier</h2>
                                </Link>
                            </div>
                        </li>
                    </ul>     
                </div>
            </nav> 
            <header className="header">
                <div className="header__banner">
                    <h3 className="header__banner--title"> Découvrez nos collections de meubles en chêne massif pour le salon, la salle à manger et la chambre.</h3>
                    <h3 className="header__banner--subtitle"> Des meubles en chêne massif pleins de caractère</h3>
                </div>
            </header>
        </div>
    )
}

export default Header