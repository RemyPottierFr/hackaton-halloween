import React,{Component} from 'react';
import './Slide.css'

class Slide extends Component {
    render(){
        return(
            <div className="slide">
                <audio 
                    autoPlay 
                    muted={this.props.muted ? false:true}
                    src={`https://raw.githubusercontent.com/RemyPottierFr/hackaton-halloween/feature/music/${this.props.music}.mp3`} 
                    type = {`audio/mp3`} >
                </audio>
                <button 
                    className="button--previous" 
                    onClick={e => this.props.decId()}>
                        <i className="fas fa-chevron-left"></i>
                </button>
                <img 
                    className="poster" 
                    src={`https://raw.githubusercontent.com/RemyPottierFr/hackaton-halloween/feature/image/${this.props.image}.png`} 
                    alt={this.props.id} />
                <button 
                    onClick={e => this.props.info()} 
                    className="info--button">
                        <i className="fas fa-info-circle"></i>
                </button>
                <div className={this.props.showInfo ? "info--show":"info--hidden"}>
                        <p className="info__title">{this.props.title.replace(/_/gi," ")}</p>
                        <div className="synopsis"> 
                                <img 
                                    className="image__poster"
                                    src={`${this.props.posterUrl}`}
                                    alt={this.props.id} 
                                />
                            <div className="synopsis__right">
                                <p className="info__director">{this.props.director.replace(/_/gi," ")}, {this.props.year}</p>
                                <p className="info__desc">{this.props.desc}
                                </p>
                            </div>
                        </div>
                    <button 
                        className="button--muted" 
                         onClick={e => this.props.musicPlay()}>
                            <i className={this.props.muted ? "fas fa-volume-up":"fas fa-volume-mute"}></i>
                    </button>
                </div>
                <button 
                    className="button--next" 
                    onClick={e => this.props.incId()}>
                        <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        )
    }
}
export default Slide