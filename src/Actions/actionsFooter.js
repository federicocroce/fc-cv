import React from 'react';

const collection = 'footer';

const actions = {};

actions.fetchObjects = dispatch => React.config.fireStoreApp.fetchObjects(collection, dispatch, 'FETCH_FOOTER');

export default actions;
