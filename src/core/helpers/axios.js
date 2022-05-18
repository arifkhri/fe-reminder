import axios from 'axios';

import config from '../../config';

const baseUrl = `${config.API_BE_URL}/api/v1`;

// Add a request interceptor
// axios.interceptors.request.use(function (config) {

//   // Do something before request is sent
//   console.log(config);
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {

//   // Do something with response data
//   return response;
// }, function (error) {
//   // Do something with response error
//   return Promise.reject(error);
// });


const rest = {
  post: (url, options, isV1) => {
    let enpointUrl = `${baseUrl}/${url}`;
    if(!isV1) {
      enpointUrl = `${config.API_BE_URL}/api${url}`;
    }

    return axios.post(enpointUrl, options);
  },
  get: (url, options, isV1) => {
    let enpointUrl = `${baseUrl}/${url}`;
    if(!isV1) {
      enpointUrl = `${config.API_BE_URL}/api${url}`;
    }
    
    return axios.get(enpointUrl, options);
  },
  put: (url, options, isV1) => {
    let enpointUrl = `${baseUrl}/${url}`;
    if(!isV1) {
      enpointUrl = `${config.API_BE_URL}/api${url}`;
    }
    
    return axios.get(enpointUrl, options);
  },
  patch: (url, options, isV1) => {
    let enpointUrl = `${baseUrl}/${url}`;
    if(!isV1) {
      enpointUrl = `${config.API_BE_URL}/api${url}`;
    }
    
    return axios.get(enpointUrl, options);
  },
}

export default rest;