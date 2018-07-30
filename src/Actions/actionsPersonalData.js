import React from 'react';

const collection = 'personalData';

const actions = {};

actions.fetchObjects = dispatch => React.config.fireStoreApp.fetchObjects(collection, dispatch, 'FETCH_PERSONAL_DATA');

export default actions;
