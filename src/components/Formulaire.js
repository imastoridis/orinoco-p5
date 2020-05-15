import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Formulaire extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            firstName: '',
            lastName:'',
            address:'',
            city:'',
            email:''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
///Create const send which groups products array and contact object to POST 
        //const products = localStorage.getItem("varnishOption")  // Test with only a string
        const allProducts = JSON.parse(localStorage.getItem("allItems"))
        const products = allProducts.map(itemId=>(itemId._id)) //Maps through arr to retrun id
        //const products = JSON.stringify(allProductsArr) //Stingify the arr
        //const products = productsStr.split(',') //Creates arr with id strings

        console.log(Array.isArray(products))
        console.log(typeof(products))
        console.log(products)
        
        const contact = this.state //Creates contact object with data from form
        console.log(this.state)
        console.log(typeof(contact))
        console.log(typeof(contact.address))
        console.log(typeof(contact.firstName))
        console.log(typeof(contact.lastName))
        console.log(typeof(contact.city))
        console.log(typeof(contact.email))

        const send = {contact, products} //Creates const with contact object and products arr
        console.log(typeof(send))
        console.log(send)

        axios
        .post('http://localhost:3000/api/furniture/order', send)
        .then(response => {
            localStorage.setItem('myOrder', JSON.stringify(response.data) )
        
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
        
    }
    render() {
        const {firstname, secondname, address, town, email} = this.state
    
        return (
            <section id="form"  >                 
                <p id="textForm">
                    Afin de valider votre commande, merci de remplir le formulaire :<br/>(* : champ obligatoire)
                </p>
                
                <form onSubmit={this.submitHandler} className="form__input" >
                    <label htmlFor ="firstname" ></label>
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstname" 
                        placeholder="Prénom*" 
                        required maxLength="50" 
                        pattern="[^0-9]*"  
                        value={firstname} 
                        onChange={this.changeHandler}/>

                    <label htmlFor ="lastname"></label>
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastname" 
                        placeholder="Nom*"
                        required maxLength="50" 
                        pattern="[^0-9]*" 
                        value={secondname}
                        onChange={this.changeHandler} />

                    <label htmlFor ="address"></label>
                    <textarea 
                        name="address" 
                        id="address" 
                        cols="25" rows="5" 
                        placeholder="Adresse*" 
                        required maxLength="500" 
                        value={address}
                        onChange={this.changeHandler} >
                    </textarea>

                    <label htmlFor ="city"></label>
                    <input 
                        type="text" 
                        name="city" 
                        id="city" 
                        placeholder="Ville*" 
                        required maxLength="100" 
                        pattern="[^0-9]*" 
                        value={town}
                        onChange={this.changeHandler} />

                    <label htmlFor ="email"></label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email*" 
                        maxLength="50" required 
                        value={email}
                        onChange={this.changeHandler} />
                    
                    <div className="form__button">
                        <Link to={"/ConfirmationPage"}>
                        <button type="submit" id="submit3" className="btn-style">VALIDER MA COMMANDE</button>
                        </Link>
                    </div>
                    
                </form>
                
            </section>
        )
    }
}

export default Formulaire