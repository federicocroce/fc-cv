import React from 'react';
// import {components} from 'react';
import ReactDOM from 'react-dom';


// import {setFrameworkConfig} from './Config/frameworkConfig';


import registerServiceWorker from './registerServiceWorker';

// frameworkConfig();
// ReactDOM.render(<components.Index />, document.getElementById('root'));
// registerServiceWorker();

import App from './App'

// setFrameworkConfig();

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
