import axios from 'axios'

const PORT = 8080

const instance = axios.create({
    baseURL: `http://localhost:${PORT}`
})

export default instance