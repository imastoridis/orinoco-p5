import React, {useState} from 'react'

function ProductTile() {
    const [items, setItems] = useState(null);
    const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
    const myApi = 'api/furniture'
    
    function fetchBooks() {
        fetch(apiURL)
            .then(resp=>resp.json())
            .then(data => setItems(data))
    }
    
    return (
        <div className="App">
            <h1>Meubles en chêne</h1>
    
        {/* Fetch data from API */}
            <div>
                <button className="fetch-button" onClick={fetchBooks}>Fetch Data</button>
            <br />
            </div>

        {/* Display data from API */}
            <div >
            {items &&
                items.map((item, index) => {
    
                return (
                    <div className="product" key={index}>
                        <div className="product__specs">
                            <p>Vernis : {item._id}</p>
                            <p>Produit : {item.name}</p>
                            <p>Prix : {item.numberOfPages}</p>
                            <p>Description : {item.country}</p>  
                        </div>
                    </div>
                    );
                })
            }
            </div>
        </div>
    );
}

export default ProductTile