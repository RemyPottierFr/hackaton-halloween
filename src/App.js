import React,{Component} from 'react';
import './App.css';
import Slide from './components/Slide'

class App extends Component {
    constructor(props) {
        super(props)
    }
    slide(){
      console.log('hello')
      let index = []
      for(let i = 1; i<83;i++){
        index.push(i)
      }
      console.log(index)
      return index.map(x=> {
      return <Slide id={x} />
    })
    }
    render(){
      return(
        <div className="App">
          {this.slide()}
        </div>
      )
    }
}

export default App;
