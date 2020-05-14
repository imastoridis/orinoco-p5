import React from 'react'
import axios from 'axios'

class Formulaire extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            firstname: '',
            secondname:'',
            address:'',
            town:'',
            email:''
        }
    }


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        const {firstname, secondname, address, town, email } = this.state
        return (
            <section id="form"  >                 
                <p id="textForm">
                    Afin de valider votre commande, merci de remplir le formulaire :<br/>(* : champ obligatoire)
                </p>
                
                <form onSubmit={this.submitHandler} className="form__input" >
                    <label htmlFor ="firstname" ></label>
                    <input 
                        type="text" 
                        name="firstname" 
                        id="firstname" 
                        placeholder="Prénom*" 
                        required maxLength="50" 
                        pattern="[^0-9]*"  
                        value={firstname} 
                        onChange={this.changeHandler}/>

                    <label htmlFor ="lastname"></label>
                    <input 
                        type="text" 
                        name="secondname" 
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
                        name="town" 
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
                        <button type="submit" id="submit3" className="btn-style">VALIDER MA COMMANDE</button>
                    </div>
                </form>
                
            </section>
        )
    }
}

export default Formulaire