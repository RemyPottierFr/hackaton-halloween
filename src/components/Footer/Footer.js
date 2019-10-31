import React from 'react';
import './Footer.css'

function Footer () {
    return (
        <footer className="Footer">
            <p className = "Footer-text"> 
                Directed by Stanislas VEGA,<br/>Bruno HOARAU,<br/> Rémy POTTIER <br/>et Alex' LE COQ
            </p>
            <img src="https://i.imgur.com/AN7Y54W.png" alt="Footer img" className="Footer-img"/>
            <img src="https://i.imgur.com/qGea8gf.png" alt="Footer Joke" className="Footer-logo"/>
        </footer>
    )
}

export default Footer;