import React,{Component} from 'react';
import './App.css';
import Slide from './components/Slide';
import Header from './components/Header/Header';

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
          <Header />          
        </div>
      )
    }
}

export default App;
