import React from 'react'
import ProductPage from './ProductPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


class ProductTile extends React.Component {
  constructor() {
        super();
        this.state = {
          isReady: false,
          products: []
        }
      }
    
      componentDidMount(): void {
        fetch("http://localhost:3000/api/furniture")
          .then(
            res => res.json()).then((d) => {
              this.setState({products: [...d], isReady:true})    
            })
      }'test'
      

      showProductPage(products) {
        const newProduct = [products]
        console.log(newProduct)
        
        return (
          <ProductPage/>
        )
      }

      render() {
        const myProducts = this.state.isReady ? this.state.products.map(p =>
        <div className="product" key={p._id}>
          <div className="product__specs">
            <h3>Meubles en chêne</h3>
              <p>Vernis : {p._varnish}</p>
              <p>Produit : {p.name}</p>
              <p>Prix : {p.price}</p>
              <p>Description : {p.description}</p> 
              
              <Link to='/productPage'>
                Product page
              </Link>  
          </div>

          <div className="product__specs">
            <img src={p.imageUrl} alt={'test'}/>
          </div>
            
          <div>
            <Link to='/productPage'>
              <button onClick={()=> this.showProductPage(p)}>
                        Click Here
              </button>
            </Link>

            <Route exact path="/productPage" component={ProductPage}>
              <ProductPage />
            </Route>
            
          </div>
        </div>):null
         
          return (
            <React.Fragment>
              {this.state.isReady && this.state.products.length > 0 ? myProducts : null}
            </React.Fragment>
          )
      }
    }
  
export default ProductTile 

