import React,{Component} from 'react';
import './App.css';
import Slide from './components/Slide'
import Footer from './components/Footer/Footer.js'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render(){
      return(
        <div className="App">
          <Footer />
        </div>
      )
    }
}

export default App;
