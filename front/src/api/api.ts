import axios from "axios"

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER
})

export default API

