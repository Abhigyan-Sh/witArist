import axios from 'axios'

// const PORT = 8080

const instance = axios.create({
    // baseURL: `http://localhost:${PORT}`
    baseURL: 'https://witarist-jq9f.onrender.com'
})

export default instance