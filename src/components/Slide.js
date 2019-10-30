import React,{Component} from 'react';
import './Slide.css'

class Slide extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="slide">
                <img className="poster" src={`https://raw.githubusercontent.com/RemyPottierFr/hackaton-halloween/feature/image/${this.props.image}.jpg`} alt={this.props.id} />
                <p>Director : {this.props.director}</p>
                <p>Title : {this.props.title}</p>
            </div>
        )
    }
}
export default Slide