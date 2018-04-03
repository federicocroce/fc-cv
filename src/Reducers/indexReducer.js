import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
// import { reducer as reduxFormReducer } from 'redux-form';
// import { combineForms } from 'react-redux-form';

import { posts } from './postsReducer';
import { maps } from './gMapsReducer';
// import { user } from './userReducer';
import { user } from './usersReducer';
import { reducerEstudies as estudies } from './reducerEstudies';
import { reducerExperiences as experiences } from './reducerExperiences';


const allReducers = {
    posts,
    maps,
    // user,
    user,
    experiences,
    estudies,
    // form:reduxFormReducer,
    router: routerReducer
}

// const rootReducer = combineForms(allReducers);
const rootReducer = combineReducers(allReducers);

export default rootReducer;
