// a reducer takes in two things
// import { store } from '../Store.js'
// import { postsResponse } from "../Data/data";
import React from 'react';

const data = {
    list: []
}


const reducerPersonalData = (state = data, action) => {
    // console.error("ENTRA");
    switch (action.type) {
        case 'FETCH_PERSONAL_DATA':
           
            return {
                ...state,
                list: action.payload.personalData
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

export { reducerPersonalData };