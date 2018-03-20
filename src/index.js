import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import './Styles/Main/index.css';
import frameworkConfig from './Config/frameworkConfig';
import Index from './Components/Sections/Index';
import App from './Components/Sections/App';

import registerServiceWorker from './registerServiceWorker';

frameworkConfig();
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
