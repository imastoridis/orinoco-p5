import React from 'react'
import HeaderCart from '../headers/HeaderCart'
import Footer from '../headers/Footer'
import Formulaire from './Formulaire'
import {
    Link,
  } from "react-router-dom";

function CartPage() {
    ///Gets Data for items and varnish from onClick on ProductPage
        let getDataItems = JSON.parse(localStorage.getItem('allItems'))
        let getDataVarnish = JSON.parse(localStorage.getItem('allVarnishOption'))
        console.log(getDataItems)
        
    ///Maps and displays ItemsName and ItemsPrice
    const ItemsName = ({getDataItems}) => (
        <div>
            {getDataItems.map(item=> (
                <div className="table" key={item.name}>
                    {item.name}
                </div>
            ))}
        </div>
    )
    const ItemsPrice = ({getDataItems}) => (
        <div>
            {getDataItems.map(item=> (
                <div className="table" key={item.price}>
                    {item.price}€
                </div>
            ))}
        </div>
    )

    ///Maps and displays varnish 
    const VarnishList = ({getDataVarnish}) => (
        <div>
            {getDataVarnish.map(items => (
                <div className="table" key={items}>
                    {items}
                </div>
            ))}
        </div>
    )

    ///Sums up all the prices
    function SumPrices() {
        let getDataItems = JSON.parse(localStorage.getItem('allItems')),
        total = 0,
        i;
        for (i = 0; i < getDataItems.length; i++) {
            total += parseInt(getDataItems[i].price);
        }
        return total
        }

    ///Button - Empties LocalStorage and refreshes the DOM - Panier is then empty
    function EmptyLocalStorage() {
        let allVarnishOption = []
        let allItems = []
        let varnishOption = []
        let item = []
        let myOrder = []
        localStorage.setItem("allVarnishOption", JSON.stringify(allVarnishOption))
        localStorage.setItem("allItems", JSON.stringify(allItems))
        localStorage.setItem("varnishOption", JSON.stringify(varnishOption))
        localStorage.setItem("item", JSON.stringify(item))
        localStorage.setItem("myOrder", JSON.stringify(myOrder))
        window.location.reload()
    }

        return (
            <div className="App">
                <section id="main-container">
                    <HeaderCart />
                    <main>
                        <section className="cart-page">
                            <div className="text__cartpage">
                                <h1>VOTRE PANIER</h1>
                            </div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Produit</th>
                                        <th>Prix</th>
                                        <th>Vernis</th>
                                    </tr>
                                    <tr>
                                        <td ><ItemsName getDataItems={getDataItems} /></td>
                                        <td ><ItemsPrice getDataItems={getDataItems} /></td>
                                        <td ><VarnishList getDataVarnish={getDataVarnish}/></td>
                                    </tr>
                                    <tr>
                                        <th>Sous-total</th>
                                        <th><SumPrices/>€</th>
                                    </tr>                         
                                </tbody>
                            </table>
                            <div className="form">
                                <div className="form__button">
                                    <Link to={'/'} >
                                        <button className="btn-style">Continuer mon shopping</button>
                                    </Link>
                                    <button onClick={EmptyLocalStorage} className="btn-style">Vider mon panier</button>
                                </div>
                            </div>
                            <div className="formulaire">
                                <Formulaire/>
                            </div>
                        </section>
                    </main>
                    <Footer />
                </section>  
            </div>
    )
}

export default CartPage