import React from 'react';
import {components} from 'react';

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, NavLink } from 'react-router-dom';

import Test from './test'
// import MinCV from './MinCV'
import Parallax from './Parallax'

// import { store, history } from '../../Config/Store.js';
// import { mainLinksRoutes as linksRoutes } from '../../Config/AppRoutes.js'


const Index = () => {

  return (
    <Provider store={React.config.storeHistory.store}>
      <ConnectedRouter history={React.config.storeHistory.history}>
        <div>
          <components.MinCV />
          <div className="nav-bar-container">
            <Switch>

            </Switch>
          </div>

        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default Index;

