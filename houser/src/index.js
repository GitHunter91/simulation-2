import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as H} from 'react-router-dom';

ReactDOM.render(<H><App /></H>, document.getElementById('root'));
registerServiceWorker();