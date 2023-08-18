import axios from 'axios'
import Cookies from 'js-cookie'

// import router from '@/router'
// import { useAuthStore } from '@/stores/auth'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // timeout: import.meta.env.VITE_API_TIMEOUT
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('wedding-quiz-token')

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

instance.interceptors.response.use(({ data }) => data)

export default instance
