import axios from "axios"

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER + '/api',
})

API.defaults.withCredentials = true

export default API

