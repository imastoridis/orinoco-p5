import React from 'react'
import {
    Link,
  } from "react-router-dom";

//Component that renders the Header on CartPage

function HeaderCart() {
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
                                <Link to={'/'} className="navbar__style">
                                    <h2 className="hover">accueil </h2> 
                                </Link>
                            </div>
                        </li>
                    </ul>     
                </div>          
            </nav> 
        </div>
    )
}

export default HeaderCart