import React from 'react'


class ProductTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          users: []
        };
      }
    
      componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                users: result.users
              });
            },

            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, users } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {users && users.map(user => (
                <li key={user.id}>
                  Users : {user.name} {user.username}
                </li>
              ))}
            </ul>
          );
        }
      }
    }

export default ProductTile 



{/*
class ProductTile extends React.Component {
    constructor(){
    state = {
        isloading: true,
        items : [],
        
    };
    }
     componentDidMount() {
        const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
        const response =  fetch(apiURL)
        const data =  response.json();
        console.log(data)
    }

    render() {
        const { isLoading, items, error } = this.state;
        return (
        <div>
            <h1>Meubles en chêne</h1>
           
            {!isLoading ? (
              items.map(item => {
                const { numberOfPages, name, country } = item;
                return (
                  <div key={index}>
                     <p>Produit : {item.name}</p>
                    <p>Prix : {item.numberOfPages}</p>
                    <p>Description : {item.country}</p>  
                    <hr />
                  </div>
                );
              })
          
            ) : (
              <h3>Loading...</h3>
            )}
        </div>
        );
      }
    }
export default ProductTile */
    
/***Attempt 2
class ProductTile extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        const [items, setItems] = useState(null);
        const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
        
        fetch(apiURL)
            .then(res=>res.json())
            .then(data => setItems(data))
    }

    render() {
        
        {this.data.map((item, index) => {
                return (
                   
                    <div className="product">   
                    <div className="product__specs">
                        <h3>Meubles en chêne</h3>
                            <p>Vernis : {item.varnish}</p>
                            <p>Produit : {item.name}</p>
                            <p>Prix : {item.price}</p>
                            <p>Description : {item.description}</p>  
                            <button className="fetch-button" onClick={fetchItems}>Selectionnez</button>  
                    </div>  
                    <div className="product__specs">     
                        <img className="product-list_img" src = {img} alt={"oak"} />
                    </div>
                </div>  
            </div>
                    
                )
            })
        }
        
    }
}   */  }   

