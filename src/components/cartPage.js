import React, {useState, useEffect, useReducer} from 'react'
import Header from './Header'
import Footer from './Footer'

function CartPage() {
//Get Data from onClick on productPage
    let getData = localStorage.getItem('myData')
        getData = JSON.parse(getData)
        //console.log(getData)

    var items = []

    function store() { 
        items.push(getData)
        localStorage.setItem("cartData", JSON.stringify(items));
    }
    console.log(items)

    store()

    return (
        
        <div className="App">
            <section id="main-container">
                <Header />
                <main>
                    <section className="product-page__product">
                        <div>
                            <h1>Votre panier</h1>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    {getData.name}
                                </li>
                            </ul>
                        </div>
                    
                    </section>
                </main>
                <Footer />
            </section>  
        </div>
        
  )

}

export default CartPage