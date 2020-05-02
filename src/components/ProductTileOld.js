import React from 'react'

import productData from './ProductData'
//import img from "../../../images/oak_1.jpg"
import ProductButton from './ProductButton'
import ProductiTileTest from './ProductTileTest'


function ProductItemPropss(props) {
    return (
        <div className="product">   
            <div className="product__specs">
                <h3>Meubles en chêne</h3>
                    <p>Vernis : {props.varnish}</p>
                    <p>Produit : {props.name}</p>
                    <p>Prix : {props.price}</p>
                    <p>Description : {props.description}</p>
                    {/*<ProductButton/>*/}
                    <ProductiTileTest/>
                    
            </div>  
            <div className="product__specs">     
                {/*<img className="product-list_img" src = {img} alt={"oak"} />*/}
            </div>
        </div>
    )
}

class ProductSpecs extends React.Component {
    render () {
    const productArr = productData.map((items, key) => 
        <ProductItemPropss 
        key = {items._id}
        varnish = {items.varnish}
        name = {items.name}
        price = {items.price}
        description = {items.description}
        imageUrl = {items.imageUrl} />         
        )
    return (
        <div>
            {productArr}
        </div>
    )
}} 

export default ProductSpecs 
