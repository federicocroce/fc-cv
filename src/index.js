import React from 'react';
import {components} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import './Styles/Main/index.css';
import './Assets/icons/style.css';
import frameworkConfig from './Config/frameworkConfig';
import Index from './Components/Sections/Index';
import AppAMP from './Components/Sections/App';
import Parallax from './Components/Sections/Parallax';
import ParallaxAMP from './Components/Sections/ParallaxAMP';

import registerServiceWorker from './registerServiceWorker';

frameworkConfig();
ReactDOM.render(<components.Index />, document.getElementById('root'));
registerServiceWorker();
