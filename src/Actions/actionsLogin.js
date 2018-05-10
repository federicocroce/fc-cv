import React from 'react';

const actions = {};

actions.hadleAuth = (dispatch) => React.config.fireStoreApp.hadleAuth(dispatch,'HANDLE-AUTH');
actions.onAuthStateChanged = (dispatch) => React.config.fireStoreApp.onAuthStateChanged(dispatch,'HANDLE-AUTH');
actions.signOut = (dispatch) => React.config.fireStoreApp.signOut(dispatch,'HANDLE-AUTH');

export default actions;
