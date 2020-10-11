import React from 'react';
import Header from '../headers/Header'
import ProductTile from './ProductTile'
import Footer from '../headers/Footer'


function HomePage() {
    return (
            <div className="App">
                <section id="main-container">
                    <Header />
                    <main>
                        <section id="product-list" className="">
                              <ProductTile />
                        </section>
                    </main>
                    <Footer />
                </section>  
            </div>
    )
}

export default HomePage;

