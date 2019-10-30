import React from 'react';
import './Footer.css'

function Footer () {
    return (
    <div className="Footer">
        <footer>
            <div className = "Footer-text">
                <span><p>
                    Directed by Stanislas VEGA, Bruno HOARAU, Rémy POTTIER et Alex' LE COQ
                </p></span>
            </div>
            <div>
                <img src="https://i.imgur.com/qGea8gf.png" alt="Footer Joke" className="Footer-logo"/>
            </div>
        </footer>
    </div>
    )
}

export default Footer;