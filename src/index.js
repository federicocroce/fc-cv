// import React from 'react';
import React, {components} from 'react';
import ReactDOM from 'react-dom';


import {setFrameworkConfig, setframeworkIndexConfig} from './Config/frameworkConfig';


import registerServiceWorker from './registerServiceWorker';

setFrameworkConfig();
setframeworkIndexConfig();

ReactDOM.render(<components.Index />, document.getElementById('root'));
registerServiceWorker();


// import App from './App'

// setFrameworkConfig();

// ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();
