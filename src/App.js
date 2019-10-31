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
      description:[
        "On tous un pote sadique, non ? Jigsaw, c’est un peu l’équivalent de cet ami en question mais qui aurait mal tourné. Lancés par James Wan (Indisious, Fast & Furious 7, Aquaman), les long-métrages mettant en scène des Escape Games sanglants auront donné vie à un antagoniste très marquant dans son design rappelant qu’il ne faut jamais faire confiance à des poupées.",
        "Psychose a marqué l’Histoire et l’Horreur avec de grands H. C’est l’épreuve du temps qui a porté Psychose au panthéon des plus grands long-métrages psychologiques avec son intrigue au cœur du motel géré par le dérangé, Norman Bates. En plus d’avoir des scènes cultes qui auront servi de points de référence pour les cinéastes du monde entier, le film atteint un niveau de tension presque inégalé à l’époque sur le grand écran.",
        "La magie de la plume de Stephen King mélangée au génie de la réalisation de Stanley Kubrick ne pouvait mener qu’à un projet qui resterait ancré dans l’inconscient collectif, Shining. Pour autant la personnalité forte du réalisateur de 2001 l’Odyssée de l’Espace va le pousser à l’éloigner du livre original pour offrir sa propre interprétation de l’œuvre. Si Stephen King apprécie moyennement, il en reste un film culte qui rayonne par l’interprétation de Jack Torrance par un jeune Jack Nicholson..",
        "George A. Romero est maître pour manier les règles du cinéma et du fantastique afin d’y glisser des messages idéologiques forts. Dawn of the Dead est une révolution qui joue de son sujet pour proposer une critique acerbe du capitalisme. Il juge en effet pertinent de présenter ses morts-vivants comme des êtres vide de sens, cherchant seulement à se nourrir, à l’image de notre société consumériste. L’image va d’ailleurs plus loin en plaçant son intrigue directement dans un centre commercial. ",
        "Nosferatu n’est autre qu’une adaptation du roman britannique classique Dracula de Bram Stoker mais pas vraiment autorisée. Si le film est classique, c’est à travers le procès qui va suivre sa sortie, intentée par la femme de l’écrivain, Florence Stoker. Résultat, la justice oblige le studio à détruire toutes les copies existantes du long métrage. Mais un vampire n’est jamais vraiment mort et le film réapparaît au grand jour en 1937, après la mort de Florence Stoker."
      ],
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
                desc={this.state.description[this.state.index]}
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