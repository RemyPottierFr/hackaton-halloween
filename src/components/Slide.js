import React,{Component} from 'react';
import axios from 'axios'
import './Slide.css'

class Slide extends Component {
    constructor(props) {
        super(props)
        this.state={
            director:null,
            title:null,
            image:null
        }
        this.name=this.name.bind(this)
    }
    componentDidMount(){
        this.name(this.props.id)
    }
    name(i){
        const url = `https://hackathon-wild-hackoween.herokuapp.com/movies/${i}`
        axios.get(url)
          .then( response => response.data )
          .then( movies =>{
            console.log(i+" : "+movies)
            this.setState({director:movies.movie.director})
            this.setState({title:movies.movie.title})
          })
        
    }
    render(){
        return(
            <div className="slide">
                <button onClick={e => this.props.decId()}>prev</button>
                <p>Numéro dans l'API : {this.props.id}</p>
                <p>Director : {this.state.director}</p>
                <p>Title : {this.state.title}</p>
                <button onClick={e => this.props.incId()}>suivant</button>
            </div>
        )
    }
}
export default Slide