import React from 'react'
import {
    Link,
  } from "react-router-dom";



function HeaderCart() {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav__list-ul">
                    <li className="nav__list-li">
                        <Link to={'/'}>
                        <h2>Oniroco</h2> 
                        </Link>
                    </li>
                    <li className="nav__list-li">
                    <Link to={'/CartPage'}>
                            <h2>panier</h2>
                    </Link>
                    </li>
                </ul>           
            </nav> 
            {/*<header className="header header__img">
                <div className="header__banner">
                    <h2 className="header__banner--title"> </h2>
                    <h2 className="header__banner--subtitle"> </h2>
                </div>
    </header>*/}
        </div>
    )
}

export default HeaderCart