import React from 'react';

import actions from "../Actions/indexActions";
import components from "../Components/indexComponents";
import config from "./indexConfig";
import functions from "./indexFunctions";


const frameworkConfig = props => {
    Object.assign(React, {
        functions : functions,
        components : components,
        actions: actions,
        config: config
    });
}

export default frameworkConfig;


