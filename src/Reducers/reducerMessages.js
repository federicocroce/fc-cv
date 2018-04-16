// a reducer takes in two things
// import { store } from '../Store.js'
// import { postsResponse } from "../Data/data";
import React from 'react';

const data = {
    list: ["asd","erttrgh"]
}


const reducerMessages = (state = data, action) => {
    // console.error("ENTRA");
    switch (action.type) {
        case 'SET_MEASSAGES':           
            return {
                ...state,
                list: state.list.concat(action.payload)
            };
        // case 'FETCH_TEXTO':
        //     return {
        //         ...state,
        //         loginState: action.payload
        //     };
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

export { reducerMessages };