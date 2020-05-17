import React from 'react'
import {
    Link,
  } from "react-router-dom";



function Header() {
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
                            <div className="link"> 

                                <Link to={'/cartPage'} className="navbar__style">


                                    <h2 className="hover">panier</h2>
                                </Link>
                            </div>
                        </li>
                    </ul>     
                </div>
                      

            </nav> 
            <header className="header header__img">
                <div className="header__banner">
                    <h2 className="header__banner--title"> Découvrez nos collections de meubles en chêne massif pour le salon, la salle à manger et la chambre.</h2>
                    <h2 className="header__banner--subtitle"> Des meubles en chêne massif pleins de caractère</h2>
                </div>
            </header>
        </div>
    )
}

export default Header