import React from 'react'
import HeaderCart from './HeaderCart'
import Footer from './Footer'

function  ConfirmationPage() {

    let myOrder = JSON.parse(localStorage.getItem('myOrder'))

    console.log(myOrder.contact.city)


    function SumPrices() {
        let getDataItems = JSON.parse(localStorage.getItem('allItems')),
        total = 0,
        i;
        for (i = 0; i < getDataItems.length; i++) {
            total += parseInt(getDataItems[i].price);
          }
          return total
        }
    
    return (
        <div className="App">
                <section id="main-container">
                    <HeaderCart />
                    <main className="confirmation-page ">
                        <div className="confirmation-page__logo">
                            <h1 className="logo__confirmation-page">Oniroco</h1>
                        </div>
                        <div>
                            <h1>Merci {myOrder.contact.firstName} pour votre confiance!</h1>
                        </div>
                        <div>
                            <p>Voici le récapitulatif de votre commande :</p>
                            <table className="table">
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
                    </main>
                    <Footer />
                </section>
        </div>
        
       
    )
}

export default ConfirmationPage
