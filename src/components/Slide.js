import React,{Component} from 'react';
import './Slide.css'

class Slide extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="slide">
                <button className="button--previous" onClick={e => this.props.decId()}><i className="fas fa-chevron-left"></i></button>
                <img className={`poster ${this.props.showInfo ? "blur":""}`} src={`https://raw.githubusercontent.com/RemyPottierFr/hackaton-halloween/feature/image/${this.props.image}.png`} alt={this.props.id} />
                <button onClick={e => this.props.info()} className="info--button"><i className="fas fa-info-circle"></i></button>
                <div className={this.props.showInfo ? "info--show":"info--hidden"}>
                    <p>{this.props.title}</p>
                    <p>{this.props.director}</p>
                </div>
                <button className="button--next" onClick={e => this.props.incId()}><i className="fas fa-chevron-right"></i></button>
            </div>
        )
    }
}
export default Slide