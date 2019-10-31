import React, {
  Component
} from 'react';
import './App.css';
import Footer from './components/Footer/Footer.js'
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      id:[17,67,66,68,71],
      image:["SAW","Psychose","Shining","dawn-of-the-dead","Nosferatu"],
      music:["Saw Theme Song- Hello Zepp","Theme from Psycho (1960) - Shower Scene HQ","Shining","dawn of the dead main theme","Hans Erdmann - Nosferatu [Main Theme] (1922)"],
      index:0,
      director:null,
      posterUrl:null,
      title:null,
      year:null,
      showInfo:false,
      musicPlay:true,
      showHeader: true
    }
  }
  componentDidMount(){
    this.request(this.state.id[this.state.index])
  }
  request(i){
    const url = `https://hackathon-wild-hackoween.herokuapp.com/movies/${i}`
    axios.get(url)
      .then( response => response.data )
      .then( movies =>{
        console.log(movies)
        this.setState({
          director:movies.movie.director,
          title:movies.movie.title,
          year:movies.movie.year,
          posterUrl:movies.movie.posterUrl
        })
      })
  }
  incId = () => {
      this.state.index === this.state.id.length - 1
      ? this.setState({ index: 0 })
      : this.setState(prevState => {
        return ({ index: prevState.index + 1})
      })   
      this.state.index === this.state.id.length - 1
      ? this.request(this.state.id[0])
      : this.request(this.state.id[this.state.index+1])
  }
  decId = () => {
      this.state.index === 0
      ? this.setState({ index: this.state.id.length - 1 })
      : this.setState(prevState => {
        return ({ index: prevState.index - 1})
      })
      this.state.index === 0
    ? this.request(this.state.id[this.state.id.length - 1])
    : this.request(this.state.id[this.state.index - 1])
  }
  info = () => {
    console.log('info')
    this.state.showInfo ? this.setState({showInfo:false}):this.setState({showInfo:true})
  }
  musicPlay = () =>{
    this.state.musicPlay ? this.setState({musicPlay:false}):this.setState({musicPlay:true})
  }
    changeHeader = () => {
      this.setState({showHeader: !this.state.showHeader})
    }
  render() {
    return ( 
      <div className = "App" >
       <Header show={this.state.showHeader} changeHeader={this.changeHeader}/>
        <div id="content">
          {
            this.state.title ? 
              <Slide 
                musicPlay={this.musicPlay} 
                muted={this.state.musicPlay} 
                info={this.info} 
                showInfo={this.state.showInfo} 
                director={this.state.director} 
                title={this.state.title} 
                image={this.state.image[this.state.index]} 
                music={this.state.music[this.state.index]} 
                year={this.state.year} incId={this.incId} 
                decId={this.decId}
                posterUrl={this.state.posterUrl}
              />
            :<p>LOADING</p>
          }
        </div>
           <Footer />
      </div>
    )
  }
}

export default App;