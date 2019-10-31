import React ,{Component} from 'react';
import './Header.css';


class Header extends Component {
	render(){
	return(
		<header className="Header">
			<div 
				className = {this.props.show ? "header-show" : "header-hidden"} 
				onClick={() => {this.props.changeHeader()}}>
					<div className="header__header">
						<audio 
							autoPlay 
							muted={this.props.show ? false:true}
							src={`https://raw.githubusercontent.com/RemyPottierFr/hackaton-halloween/feature/music/Spooky Sounds.mp3`} 
							type = {`audio/mp3`} >
                		</audio>
							<img src="https://i.imgur.com/DCoo2iN.png" alt="Logo Maison " className="logo-home"/>
					</div>
						<div>
							<img src="https://i.imgur.com/BvI1YS9.png" alt="Logo Sream" className="logo-scream"/>
						</div>
			</div>
		</header>
		);
	}
}



export default Header;
