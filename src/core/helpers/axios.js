import axios from 'axios';

import config from '../../config';

const baseUrl = `${config.API_BE_URL}/api/v1`;

let userData;

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

function prepareRequest(url, options = {}, isNotV1) {
  let enpointUrl = `${baseUrl}${url}`;
  if(isNotV1) {
    enpointUrl = `${config.API_BE_URL}/api${url}`;

  } else {
    options = {
      headers: {
        Authorization: `Bearer ${userData.access_token}`
      },
      ...options
    }
  }

  return {enpointUrl, options};
}


const rest = {
  config:(data) => {
    userData = data?.userData;
  },
  post: (url, payload, notV1, opt) => {
    const {enpointUrl, options} = prepareRequest(url, opt, notV1)

    return axios.post(enpointUrl, payload, options);
  },
  get: (url, opt, notV1) => {
    const {enpointUrl, options} = prepareRequest(url, opt, notV1)
    return axios.get(enpointUrl, options);
  },
  put: (url, payload, notV1, opt) => {
    const {enpointUrl, options} = prepareRequest(url, opt, notV1)
    
    return axios.put(enpointUrl, payload, options);
  },
  patch: (url, payload, opt, notV1) => {
    const {enpointUrl, options} = prepareRequest(url, opt, notV1)
    
    return axios.patch(enpointUrl, payload, options);
  },
}

export default rest;