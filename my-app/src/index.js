import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';



class Bt extends Component {
state ={ counters :10 };

handleClick = () =>{
    this.setState({
        counters:this.state.counters+1;
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


let models = (<div className="container"> 
{/* <App /> */}
<Bt />
 </div>
);




ReactDOM.render(models, document.getElementById('root'));
registerServiceWorker();
