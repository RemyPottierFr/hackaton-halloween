import React,{Component} from 'react';
import './Slide.css'

class Slide extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="slide">
                <button className="button--next" onClick={e => this.props.incId()}><i class="fas fa-chevron-left"></i></button>
                <img className="poster" src={`https://raw.githubusercontent.com/RemyPottierFr/hackaton-halloween/feature/image/${this.props.image}.jpg`} alt={this.props.id} />
                <p>Director : {this.props.director}</p>
                <p>Title : {this.props.title}</p>
                <button className="button--next" onClick={e => this.props.incId()}><i class="fas fa-chevron-right"></i></button>
            </div>
        )
    }
}
export default Slide