import React, {
  Component
} from 'react';
import './App.css';
import Slide from './components/Slide'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      id:5
    }
  }
  incId(){
    this.setState(prevState =>({id:prevState+1}))
  }
  decId(){
    this.setState(prevState =>({id:prevState-1}))
  }
  render() {
    return ( 
      <div className = "App" >
        <Slide id={this.state.id} incId={this.state.incId} decId={this.state.decId}/>
      </div>
    )
  }
}

export default App;