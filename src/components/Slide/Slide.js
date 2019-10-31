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
                    className={`poster ${this.props.showInfo ? "blur":""}`} 
                    src={`https://raw.githubusercontent.com/RemyPottierFr/hackaton-halloween/feature/image/${this.props.image}.png`} 
                    alt={this.props.id} />
                <button 
                    onClick={e => this.props.info()} 
                    className="info--button">
                        <i className="fas fa-info-circle"></i>
                </button>
                <div className={this.props.showInfo ? "info--show":"info--hidden"}>
                        <p className="info__title">{this.props.title}</p>
                        <div className="synopsis"> 
                                <img 
                                    className="image__poster"
                                    src={`${this.props.posterUrl}`}
                                    alt={this.props.id} 
                                />
                            <div className="synopsis__left">
                                <p className="info__director">{this.props.director}, {this.props.year}</p>
                                <p className="info__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, corrupti.
                                    Ratione, totam amet nisi distinctio excepturi voluptate sapiente neque quibusdam vitae dignissimos sequi
                                    eum assumenda illum. Nam, 
                                    libero pariatur culpa ipsa tenetur quo, accusantium enim illum, ex iste quisquam molestias esse fugiat 
                                    quasi voluptatem ratione officia corporis nostrum optio vitae.
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