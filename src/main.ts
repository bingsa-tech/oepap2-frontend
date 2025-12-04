import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
createApp(App).mount('#app')
export async function getPatients() {
  const res = await api.get('/patients');
  return res.data;
}