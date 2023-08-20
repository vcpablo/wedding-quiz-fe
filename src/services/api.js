import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

instance.interceptors.request.use((config) => {
  if (window) {
    const token = window.localStorage.getItem('wedding-quiz-token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }

  return config
})

instance.interceptors.response.use(({ data }) => data)

export default instance
