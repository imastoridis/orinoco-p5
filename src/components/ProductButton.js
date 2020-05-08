import React from 'react'



class ProductButton extends React.Component {
    
    
    
  removeFruit(products) {
    //alert(products)
    return (
        this.products.item.name)
  }
    
      render() {
        return (
            <ul>
              {this.state.products.map((item) => (
                <li>
                  <button onClick={() => this.removeFruit(item)}>
                    Click Here
                  </button>
                </li>
              ))}
            </ul>
          );
        }
    }


export default ProductButton
