import React from 'react'
import HeaderCart from './HeaderCart'
import Footer from './Footer'
import Formulaire from './Formulaire'

function CartPage() {

///Get Data for items and varnish from onClick on ProductPage
    let getDataItems = JSON.parse(localStorage.getItem('allItems'))
    let getDataVarnish = JSON.parse(localStorage.getItem('allVarnishOption'))

///Maps and displays items
const ItemsName = ({getDataItems}) => (
    <div>
        {getDataItems.map(item=> (
            <div className="table" key={item.name}>
                <td>{item.name}</td>
            </div>
        ))}
    </div>
)
const ItemsPrice = ({getDataItems}) => (
    <div>
        {getDataItems.map(item=> (
            <div className="table" key={item.price}>
                <td>{item.price}€</td>
            </div>
        ))}
    </div>
)

///Maps and displays varnish
const VarnishList = ({getDataVarnish}) => (
    <div>
        {getDataVarnish.map(items => (
            <div className="table" key={items}>
                 <td>{items}</td>
            </div>
        ))}
    </div>
)
    return (
        <div className="App">
            <section id="main-container">
                <HeaderCart />
                <main>
                    <section className="cart-page">
                        <div>
                            <h1 >Votre panier</h1>
                        </div>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Produit</th>
                                    <th>Prix</th>
                                    <th>Vernis</th>
                                </tr>
                                <tr>
                                    <td><ItemsName getDataItems={getDataItems} /></td>
                                    <td><ItemsPrice getDataItems={getDataItems} /></td>
                                    <td ><VarnishList getDataVarnish={getDataVarnish}/></td>
                                </tr>
                            </tbody>
                        </table>


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