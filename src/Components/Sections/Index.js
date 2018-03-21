import React from 'react';

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, NavLink } from 'react-router-dom';

import storeHistory from '../../Config/store.js';

// import { store, history } from '../../Config/Store.js';
// import { mainLinksRoutes as linksRoutes } from '../../Config/AppRoutes.js'


const Index = () => {

  return (
    <Provider store={React.config.storeHistory.store}>
      <ConnectedRouter history={React.config.storeHistory.history}>
        <div>
          <h1>
            <NavLink className='title-home' to="/">Venta/Alquier Inmuebles</NavLink>
          </h1>
          <div className="nav-bar-container">
            <Switch>
              {/*<React.components.NavigationBar linksRoutes={React.config.linksRoutes.mainLinksRoutes} />*/}
            </Switch>
          </div>

        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default Index;

