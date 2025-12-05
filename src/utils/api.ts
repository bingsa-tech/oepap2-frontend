import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false, // true si tu utilises cookies
});

// si token en localStorage -> set header
const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
