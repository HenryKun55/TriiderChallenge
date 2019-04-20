import axios from 'axios'

const api = axios.create({
    baseURL: 'https://5c5d8680ef282f0014c3d956.mockapi.io/api/v1'
})

export default api;