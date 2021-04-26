import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=QVGDniDa2qPxq9pUgocXS8zGE4QrjknNIahV4c1h&date=',
  timeout: 3000
})
