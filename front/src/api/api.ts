import axios from "axios"
import { getCsrfToken } from "utils/util"

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  withCredentials: true,
  headers: {
     'X-CSRF-TOKEN': getCsrfToken(),
  }
})

export default API

