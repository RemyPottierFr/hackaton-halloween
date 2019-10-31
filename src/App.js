import React,{Component} from 'react';
import './App.css';
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
        </div>
      )
    }
}

export default App;
