import axios from 'axios';
// 'https://find-real-estate-backend.onrender.com/api/users'
const baseURL = 'https://find-real-estate-backend.onrender.com/api'
//const baseURL = "http://localhost:8800/api"
const apiRequest = axios.create({
	baseURL: baseURL, withCredentials: true,
})

export default apiRequest