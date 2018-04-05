// a reducer takes in two things
// import { store } from '../Store.js'
// import { postsResponse } from "../Data/data";
import React from 'react';

const data = {
    list: [],
    generic: {}
}


const reducerEstudies = (state = data, action) => {
    // console.error("ENTRA");
    switch (action.type) {
        case 'FETCH_ESTUDIES':
            const response = state.list;
            const generic = state.generic;

            if (action.payload.type != "generic") {
                response.push(action.payload);
            }
          
            return {
                ...state,
                list: response,
                generic: action.payload.type == "generic" ? action.payload : state.generic
            };
        case 'FETCH_TEXTO':
            return {
                ...state,
                text: action.payload
            };
        case 'SET_SELECTED':
            return {
                ...state,
                selected: action.selected
            };
        case 'CLEAR_POST':
            return {
                ...state,
                selected: {}
            };
        default:
            return state
    }
}

export { reducerEstudies };