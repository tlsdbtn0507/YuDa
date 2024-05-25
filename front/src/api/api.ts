import axios from "axios"

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-CSRF-TOKEN',
})

export default API

