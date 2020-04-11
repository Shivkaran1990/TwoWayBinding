import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './component/UserInput';
import Inputfile from './component/Inputfile';
import Output from './component/Output';


class App extends Component {

  state={
    username:'Shivkaran Ravidas'
}

usernameChangeNameHandler=(event)=>{
  this.setState({username:event.target.value})

}

  render() {

    return (<div className="App">
      <Inputfile changes={this.usernameChangeNameHandler}
      currentName={this.state.username}
      ></Inputfile>
      <Output username={this.state.username}></Output>
      <Output username="Rahul"></Output>
      <Output username="Ram"></Output>
    </div>);

  }


}

export default App;
