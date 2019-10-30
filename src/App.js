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
      id:[18,67,68,69,71],
      image:["saw","baby-dead","Shining","Nosferatus","ça"],
      index:0,
      director:null,
      title:null
    }
  }
  componentDidMount(){
    console.log(this.state.index)
    this.request(this.state.id[this.state.index])
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
    this.state.index === this.state.id.length - 1 ?
    this.setState({index:0}):
    this.setState(prevState => ({index:prevState.index+1}))
    console.log(this.state.index)
    this.request(this.state.id[this.state.index])
  }
  decId = () => {
    this.state.index === 0 ?
    this.setState({index:this.state.id.length-1}):
    this.setState(prevState => ({index:prevState.index-1}))
    console.log(this.state.index)
    this.request(this.state.id[this.state.index])
  }
  render() {
    return ( 
      <div className = "App" >
        <div id="content">
          {
            this.state.title ? 
            <Slide director={this.state.director} title={this.state.title} image={this.state.image[this.state.index]} incId={this.incId} decId={this.decId}/>
            :<p>LOADING</p>
          }
        </div>
      </div>
    )
  }
}

export default App;