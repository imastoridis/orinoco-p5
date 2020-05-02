import React from 'react';
//import { ProductSpecs, Header, Footer } from '../components';
import Header from './Header'
import ProductTile from './ProductTile'
import Footer from './Footer'



function HomePage() {
    return (
            <body className="App">
                <section id="main-container">
                    <Header />
                    <main>
                        <section id="product-list" className="">
                              <ProductTile />
                        </section>
                    </main>
                    <Footer />
                </section>  
            </body>
    )
}

export default HomePage;