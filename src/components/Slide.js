import React,{Component} from 'react';
import axios from 'axios'
import './Slide.css'

class Slide extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="slide">
                <p>Numéro dans l'API : {this.props.id}</p>
                <p>Director : {this.props.director}</p>
                <p>Title : {this.props.title}</p>
                <button onClick={e => this.props.incId()}>suivant</button>
            </div>
        )
    }
}
export default Slide