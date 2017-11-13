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
          <div className="container">
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

  const Results = (props) => {
    return(
    <div>Test</div>
    );
  }

class Datenow extends Component{
  constructor(props){
   // fires before component is mounted
 super(props); // makes this refer to this component
 
 this.state = {date: new Date()}; // set state
  }

  render(){
    return( 
      <div>{this.state.date.toLocaleDateString()}</div>
    );
  }
}

  class Footer extends Component{
    render(){
      return(
        <div className="container-fluid footerbg">
          <div className="row">
            <div className="col-sm-12">
              copy 2017 All rights Reserved.
            </div>
          </div>
        </div>
      );
    }
  }
  
const Headline = (props) =>{
  return <div> {props.name}
  </div>
}

class DataList extends Component{
  constructor (){
    super();
    this.state = {
      data: 
      [
         {
            "id":1,
            "name":"Foo",
            "age":"20"
         },
         {
            "id":2,
            "name":"Bar",
            "age":"30"
         },
         {
            "id":3,
            "name":"Baz",
            "age":"40"
         }
      ]
   }
    }
    render(){
      return (
        
      <div>
        
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
         </div>
      );
    }
  }

  class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
          </tr>
       );
    }
 }

  class App extends Component{
    render(){
      return(
        <div>
        <Header />
         <Results /> 
         <Bt /> 
         <Datenow />
        <Footer />
        <Headline name="wonder" />
        <DataList />
        </div>
      );
    }
  }

export default App;
