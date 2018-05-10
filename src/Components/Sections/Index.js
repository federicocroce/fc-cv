import React, {components, config} from 'react';

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, NavLink } from 'react-router-dom';

const Index = () => {

  return (
    <Provider store={config.storeHistory.store}>
      <ConnectedRouter history={config.storeHistory.history}>
          <components.MinCV />      
      </ConnectedRouter>
    </Provider>
  )
}

export default Index;

