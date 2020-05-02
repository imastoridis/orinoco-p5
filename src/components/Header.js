import React from 'react'


function Header() {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav__list-ul">
                    <li className="nav__list-li">
                        <h1>Oniroco</h1> 
                    </li>
                    <li className="nav__list-li">
                            <a className="nav__lists__item--right" href="panier.html">panier</a>
                    </li>
                </ul>           
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