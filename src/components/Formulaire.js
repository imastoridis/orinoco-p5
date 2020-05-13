import React from 'react'

class Formulaire extends React.Component {

    render() {
        return (
            <section id="form"  >
                 <button id="empty" className="btn-style">Continuer mon shopping</button>
                 <button id="empty" className="btn-style">Vider mon panier</button>
                <p id="textForm">
                    Afin de valider votre commande, merci de remplir le formulaire :
                </p>

                <p>(* : champ obligatoire)</p>

                <form className="form__input">
                    <label for="firstname" ></label>
                    <input type="text" name="firstname" id="firstname" placeholder="Prénom*" required maxLength="50" pattern="[^0-9]*" />

                    <label for="lastname"></label>
                    <input type="text" name="secondname" id="lastname" placeholder="Nom*" required maxLength="50" pattern="[^0-9]*" />

                    <label for="address"></label>
                    <textarea name="address" id="address" cols="25" rows="5" placeholder="Adresse*" required maxLength="500"></textarea>

                    <label for="city"></label>
                    <input type="text" name="town" id="city" placeholder="Ville*" required maxLength="100" pattern="[^0-9]*" />

                    <label for="email"></label>
                    <input type="email" name="email" id="email" placeholder="Email*" maxLength="50" required />
                    
                </form>
                <button type="button" id="submit" className="btn-style">ENVOYER</button>
            </section>
        )
    }
}

export default Formulaire