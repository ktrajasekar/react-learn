import React, { Component } from 'react';
import logo1 from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


// Increment 
class Bt extends Component {
  state ={ counters :10 };
  handleClick = () =>{
      this.setState({
          counters:this.state.counters+1
      })
  };
  
      render(){
          return(
              <button onClick={this.handleClick}>
                  {this.state.counters}
              </button>   
          );
      }
    }
    class Header extends Component {
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo1} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        );
      }
    }

  class App extends Component{
    render(){
      return(
        <div>
        <Header />
        <Bt />
        </div>
      );
    }
  }


export default App;
