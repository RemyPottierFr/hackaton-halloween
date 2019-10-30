import React from 'react';
import './Header.css';


function Header(){
	return(
		<header className="Header">
			<div>
				<img src="https://i.imgur.com/DCoo2iN.png" alt="Logo Maison " className="logo-home"/>
			</div>
			<div>
				<img src="https://i.imgur.com/BvI1YS9.png" alt="Logo Sream" className="logo-scream"/>
			</div>
		</header>
		);
}


export default Header;