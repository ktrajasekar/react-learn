import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const Button1  = function(){
    return(
    <button className="btn">Test</button>
      );
    };

    let models = (<div className="container"> 
    <Button1 />
    <App />
    </div>
    );

ReactDOM.render(models, document.getElementById('root'));
registerServiceWorker();
