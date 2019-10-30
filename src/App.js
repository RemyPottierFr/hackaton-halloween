import React, {
  Component
} from 'react';
import './App.css';
import Slide from './components/Slide'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      id:1,
      director:null,
      title:null
    }
  }
  componentDidMount(){
    this.request(this.state.id)
  }
  request(i){
    const url = `https://hackathon-wild-hackoween.herokuapp.com/movies/${i}`
    axios.get(url)
      .then( response => response.data )
      .then( movies =>{
        console.log(i+" : "+movies)
        this.setState({director:movies.movie.director})
        this.setState({title:movies.movie.title})
      })
  }
  incId = () => {
    this.state.id<=0 ? this.setState(prevState => ({id:1})):this.setState(prevState => ({id:prevState.id+1}))
    this.request(this.state.id)
  }
  decId = () => {
    this.state.id<=1 ? this.setState(prevState => ({id:1})):this.setState(prevState => ({id:prevState.id-1}))
    this.request(this.state.id)
  }
  render() {
    return ( 
      <div className = "App" >
        <button onClick={e => this.decId()}>prev</button>
        {
          this.state.title ? 
          <Slide id={this.state.id} director={this.state.director} title={this.state.title}/>
          :<p>LOADING</p>
        }
        <button onClick={e => this.incId()}>suivant</button>
      </div>
    )
  }
}

export default App;