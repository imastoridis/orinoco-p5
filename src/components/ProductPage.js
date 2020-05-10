import React, {useState, useEffect} from 'react'
import {
    Link,
  } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'


function ProductPage({match}) {
    useEffect(()=> {
        fetchItem();
        //console.log(match)
    }, []);

    const [item, setItem] = useState({});

///Fetch data 
    const fetchItem = async () => {
        const fetchItem = await fetch(`http://localhost:3000/api/furniture/${match.params._id}`)
        const item = await fetchItem.json();
        setItem(item)
        //console.log(item)           
    };
    
///Save data on localStorage   
    function storeData() {
        let setData = localStorage.setItem('myData', JSON.stringify(item));
        let getData = localStorage.getItem('myData')
         getData = JSON.parse(getData)
        console.log(getData)
        }

    return (
              
        <div className="App">
            <section id="main-container">
                <Header />
                <main>
                    <section className="product-page__product">
                        <div>
                            <p>Personnaliser votre produit</p>
                        </div>
                        <div className="product-page__image">
                            <img src={item.imageUrl} alt={item.name}/>
                        </div>      
                        <div className="product" key={item._id}>
                            <div className="product__specs-item">
                            <h3>Meubles en chêne</h3>
                                <p>Vernis : {item.varnish}</p>
                                <p>Produit : {item.name}</p>
                                <p>Prix : {item.price}€</p>
                                <p>Description : {item.description}</p> 
                            </div>
                        </div>
                        <div className="product-page__form">
                            <form  action="panier.html">
                                <label for="vernis" className="product-page__form--label"> Selectionnez votre vernis</label>
                                    <div>
                                        <select id="vernis">
                                            {<option value="dark-Oak">{item.varnish}</option>}
                                            {<option value="light-oak">{item.varnish}</option>}
                                            {<option value="mahogany">{item.varnish}</option>}
                                        </select>
                                    </div>
                            </form>
                        </div>
                        <div className="btn product-page__btn">
                            <Link to ={`/cartPage`}>
                            <button onClick={storeData} type="button" className="btn-style btn__image-style">Valider</button>
                            </Link>
                        </div> 
                    </section>
                </main>
                <Footer />
            </section>  
        </div>
        
  )
}

export default ProductPage;

