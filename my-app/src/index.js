import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let models = (<div className="container"> 
    <App />
 </div>
);


ReactDOM.render(models, document.getElementById('root'));
registerServiceWorker();
