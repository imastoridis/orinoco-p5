import React from 'react';


function ProductPage() {
    return (
        <section className="product-page__product">
            <div>
                <p>Personnaliser votre produit</p>
            </div>

            <div className="product-page__image">
                {/*image*/}
            </div>      
            <div className="product__specs">
                {/*Product specs*/}
            </div>

            <div className="product-page__form">
                <form  action="panier.html">
                    <label for="vernis" className="product-page__form--label"> Selectionnez votre vernis</label>
                        <div>
                            <select id="vernis">
                                {/*<option value="dark-Oak">{props.varnish}</option>*/}
                                {/*<option value="light-oak">Light Oak</option>
                                <option value="mahogany">Mahogany</option>*/}
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

export default ProductPage;