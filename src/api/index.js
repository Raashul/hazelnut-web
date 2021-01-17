import axios from 'axios';
import _ from 'lodash';
import {logout, getToken} from './auth'

import { STAGE_REACT_APP_URL } from 'react-native-dotenv';

if (!_.isString(STAGE_REACT_APP_URL)) {
  throw new Error(`you should define a REACT_APP_URL in a ".env"
    or ".env.local" at the root of the project`);
}


// global.currentReactEnvironment = STAGE_REACT_APP_URL;

let api = axios.create({ baseURL: STAGE_REACT_APP_URL});

api.interceptors.response.use(res => res, function (error) {
  if(error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      logout();
      // TODO: redirect to login page
    }
  }
  
  return Promise.reject(error)
})

// use this to add token to each request
api.interceptors.request.use(function (config) {
  config.headers.Authorization = `${getToken()}`
  return config
}, function (err) {
  return Promise.reject(err)
})

export function login(payload) {
  return api.post('/local/login', payload);
}



