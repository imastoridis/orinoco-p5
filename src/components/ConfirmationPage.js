import React from 'react'
import HeaderConfirmationPage from '../headers/HeaderConfirmationPage'
import Footer from '../headers/Footer'
import {
    Link,
  } from "react-router-dom";

function  ConfirmationPage() {
    //Changes myOrder from string to JS Object
    let myOrder = JSON.parse(localStorage.getItem('myOrder'))

    function SumPrices() {
        let getDataItems = JSON.parse(localStorage.getItem('allItems')),
        total = 0,
        i;
        for (i = 0; i < getDataItems.length; i++) {
            total += parseInt(getDataItems[i].price);
          }
          return total
        }

    //Button - Empties LocalStorage - Panier is then empty
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
    }   
    
    return (
        <div className="App">
                <section id="main-container">
                    <HeaderConfirmationPage />
                    <main className="confirmation-page ">
                        <div className="confirmation-page-width">
                            <div className="confirmation-page__logo">
                                <h1 className="logo__confirmation-page">Oniroco</h1>
                            </div>
                            <div>
                                <h1>Merci {myOrder.contact.firstName} pour votre confiance!</h1>
                            </div>
                            <div>
                                <p>Voici le récapitulatif de votre commande :</p>
                                <table className="table table-confirmation">
                                    <tbody>
                                        <tr>
                                            <th>Prix Total : <SumPrices/>€</th>
                                        </tr>
                                        <tr>
                                        <th>
                                            Identifiant de votre commande : {myOrder.orderId}
                                        </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="form">
                            <div className="form__button">
                                <Link to={'/'} >
                                    <button onClick={EmptyLocalStorage} className="btn-style">Retour a l'accueil</button>
                                </Link>

                            </div>
                        </div>
                        </div>
                    </main>
                    <Footer />
                </section>
        </div>
    )
}

export default ConfirmationPage
