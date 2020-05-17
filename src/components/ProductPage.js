import React, {useState, useEffect} from 'react'
import {
    Link,
} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

/// This page fetches specific item after onClick on ProductPage and renders it. 
//When the user click on "Valider", it stores the choices on LocalStoraga

function ProductPage({match}) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

///Fetch data from API
    useEffect(() => {
        const fetchItem = fetch(`http://localhost:3000/api/furniture/${match.params._id}`)
            fetchItem.then(response => {
            return response.json()
        }).then(item => {
            setIsLoaded(true);
            setItem(item);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [match.params._id])

///Maps varnish array and renders it in select option
    const arrVarnish = item.varnish
    var VarnishList = props => 
        <select className="vernis" id="vernis">{props.arrVarnish && props.arrVarnish.map((label,value) => 
            <option value={label} key={value}>
                {label}
            </option>)}
        </select>
 

///Saves data on localStorage and adds to Array "existingEntries"  
    function storeData() {
        var existingEntries = JSON.parse(localStorage.getItem("allItems"));
        if(existingEntries == null) existingEntries = [];
        localStorage.setItem('item', JSON.stringify(item));
        existingEntries.push(item);
        localStorage.setItem("allItems", JSON.stringify(existingEntries));

///Stores varnish selection on dropdown form, saves data on localStorage and adds to Array "existingEntriesVarnish"
        var varnishOption = document.getElementById('vernis').value //Gets value from dropdown form

        var existingEntriesVarnish = JSON.parse(localStorage.getItem("allVarnishOption")); //Takes previous values from lStorage
            if(existingEntriesVarnish == null) existingEntriesVarnish = []; //Creates an empty array if no previous values
            localStorage.setItem('varnishOption',varnishOption); ////Assigns value to varnishOption in lStorage 
            existingEntriesVarnish.push(varnishOption); //Pushes the value in array
            localStorage.setItem("allVarnishOption", JSON.stringify(existingEntriesVarnish)); //adds the new value to lStorage    
        }

///Error message after fetch
    if (error) {
        return <div> {'Erreur de connection'}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {

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
                                <div className="product-page__form">
                                    <form>
                                        <label htmlFor="vernis" className="product-page__form--label"> Selectionnez votre vernis</label>
                                        <div>
                                            <VarnishList arrVarnish={arrVarnish}/>    
                                        </div>
                                    </form>
                                </div>
                                <div className="btn product-page__btn">
                                <Link to ={`/cartPage`}>
                                <button onClick={storeData} type="button" className="btn-style btn__image-style">Valider</button>
                                </Link>
                            </div> 
                            </div>
                            
                           
                        </section>
                    </main>
                    <Footer />
                </section>  
            </div>
    )
    }
}
export default ProductPage;

