import axios from "axios"

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER
})

API.defaults.withCredentials = true

export default API

