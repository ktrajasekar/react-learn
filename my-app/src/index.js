import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Datafn  from './datafn'

import registerServiceWorker from './registerServiceWorker';

let models = (<div className="container"> 
    <App />
    <Datafn subreddit="reactjs" />
 </div>
);


ReactDOM.render(models, document.getElementById('root'));
registerServiceWorker();
