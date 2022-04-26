/* eslint-disable vue/script-setup-uses-vars */
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/SamSSLF/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}
