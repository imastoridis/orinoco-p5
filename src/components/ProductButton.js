import React, { Component } from 'react'



function ProductButton() {
    const [items, setItems] = useState(null);
    const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
    const myApi = 'api/furniture'
    
    return (
        function fetchItems() {
            fetch(apiURL)
                .then(resp=>resp.json())
                .then(data=>setItems(data))
        }

    )
}

export default ProductButton
