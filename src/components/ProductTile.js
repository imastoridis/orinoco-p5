import React, {useState, useEffect} from 'react'
import {
  Link,
} from "react-router-dom";

function ProductTile() {
    useEffect(()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
      const data = await fetch('http://localhost:3000/api/furniture')
      const items = await data.json();
      console.log(items)
      setItems(items)
    };

    return (
      <div>
          {items.map(item =>
              <div className="product" key={item._id}>
              <div className="product__specs">  
                  <h2>Produit : {item.name}</h2>
                  <p>Vernis : {item.varnish}</p>
                  <p>Prix : {item.price}€</p>
                  <p>Description : {item.description}</p> 
              </div>
    
              <div className="product__specs">
                <img src={item.imageUrl} alt={'test'}/>
                <Link to={`/productPage/${item._id}`}>
                  <div>
                      <br></br>
                      <button className="btn-style">
                          Selectionnez
                      </button>    
                  </div>
                </Link>
              </div>
              </div>
              )}
      </div>
    )
}

export default ProductTile