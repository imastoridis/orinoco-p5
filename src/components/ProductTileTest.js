import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';

function ProductiTileTest() {
    const [books, setBooks] = useState(null);
    const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
    const myApi = 'api/furniture'
    
    function fetchBooks() {
        fetch(apiURL)
            .then(resp=>resp.json())
            .then(data => setBooks(data))
    }


    return (
      <div className="App">
        <h1>Game of Thrones Books</h1>
        <h2>Fetch a list from an API and display it</h2>
  
        {/* Fetch data from API */}
        <div>
          <button className="fetch-button" onClick={fetchBooks}>Fetch Data</button>
          <br />
        </div>
  
        {/* Display data from API */}
        


        {/* Use JSX below for each book */}
          <div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(', ');

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>👨: {authors}</p>
                  <p>📖: {book.numberOfPages} pages</p>
                  <p>🏘️: {book.country}</p>
                  <p>⏰: {cleanedDate}</p>
                </div>
              </div>
            );
          })}
      </div>
  
        <ScotchInfoBar seriesNumber="7" />
      </div>
    );
  }
  

  export default ProductiTileTest

/*
  const rootElement = document.getElementById('container');
  ReactDOM.render(<ProductiTileTest />, rootElement);*/
