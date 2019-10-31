import React,{Component} from 'react';
import './App.css';
import Slide from './components/Slide'
import Footer from './components/Footer/Footer.js'
import Header from './components/Header/Header';

class App extends Component {
    constructor(props) {
        super(props)
        this.state={
          showHeader: true
        }
    }
    changeHeader = () => {
      this.setState({showHeader: !this.state.showHeader})
    }
    render(){
      return(
        <div className="App">
          <Header show={this.state.showHeader} changeHeader={this.changeHeader}/>
          <Footer />
        </div>
      )
    }
}

export default App;
