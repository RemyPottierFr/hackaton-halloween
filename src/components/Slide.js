import React,{Component} from 'react';
import axios from 'axios'
import './Slide.css'

class Slide extends Component {
    constructor(props) {
        super(props)
    }
    name(i){
        const url = `https://hackathon-wild-hackoween.herokuapp.com/movies/${i}`
        axios.get(url)
          .then( response => response.data )
          .then( movies =>{
            console.log(i+" : "+movies)
            let moviesHtml = `
              <div class="movie-desc">
                <p>${this.props.id}</p>
                <p>${movies.movie.title}</p>
                <p>${movies.movie.director}</p>
              </div>
            `
            document.querySelector('.container').innerHTML+=moviesHtml
          })
        
    }
    render(){
        return(
                <div className="container">{this.name(this.props.id)}</div> 
        )
    }
}
export default Slide