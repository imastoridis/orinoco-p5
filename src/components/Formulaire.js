import React from 'react'
import axios from 'axios'
import history from './history';

class Formulaire extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            firstName: '',
            lastName:'',
            address:'',
            city:'',
            email:'',
            hasError:false
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
//Checks if localStorage/panier is empty. If empty, returns alert
        var isEmpty = localStorage.getItem('item');

        if (isEmpty.length > 2 ) {
            e.preventDefault()
///Creates const "send" which groups 'products' array and 'contact' object to POST 
                const allProducts = JSON.parse(localStorage.getItem("allItems"))
                
                const products = allProducts.map(itemId=>(itemId._id)) //Maps through arr to return id
            
                const contact = this.state //Creates contact object with data from form
        
                const send = {contact, products} //Creates const with contact object and products arr
                
                axios
                .post('http://localhost:3000/api/furniture/order', send)
                .then(response => {
                    localStorage.setItem('myOrder', JSON.stringify(response.data) )
                    history.push('/confirmationpage') //Redirects to confirmation page
                    window.location.reload(); 
                })
                .catch(error =>{
                    this.setState({hasError:true})
                    console.log(error)
                })
        } else {
            alert("Merci de rajouter un produit dans votre panier.");
        }
    }

    render() {
        const {firstname, secondname, address, town, email} = this.state
        if (this.state.hasError) {
            return <h3 className="error">Un problème technique ne permet pas d'accéder au service que vous désirez. Merci de réessayer ultérieurement</h3>;
        } else {
        return (
            <section id="form"  >                 
                <p id="textForm">
                    Afin de valider votre commande, merci de remplir le formulaire :<br/>(*: champ obligatoire)
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
                        <button type="submit" id="submit" className="btn-style">VALIDER MA COMMANDE</button>
                    </div>
                </form>
            </section>
        )}
    }
}

export default Formulaire