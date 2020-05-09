import React, {useState, useEffect} from 'react'


function ProductItem({match}) {
    useEffect(()=> {
        fetchItem();
        console.log(match)
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`http://localhost:3000/api/furniture/${match.params._id}`)
    
        const item = await fetchItem.json();
        setItem(item)
        console.log(item)
    };

    return (
        <section className="product-page__product">
            <div>
                <p>Personnaliser votre produit</p>
            </div>

            <div className="product-page__image">
                {item.imageUrl}
            </div>      
            <div className="product" key={item._id}>
                <div className="product__specs">
                  <h3>Meubles en chêne</h3>
                    <p>Vernis : {item._varnish}</p>
                    <p>Produit : {item.name}</p>
                    <p>Prix : {item.price}</p>
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
                <button type="button" className="btn-style btn__image-style">Valider</button>
            </div>  

        </section>
  )
}

export default ProductItem;