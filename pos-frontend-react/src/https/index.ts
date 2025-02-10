import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true, // You need this when you work with cookies
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

interface AuthData {
  email: string;
  password: string;
}

interface RegisterData extends AuthData {
  name: string;
  phone: string;
  role: string;
}

// API Endpoints
export const login = (data: AuthData) => api.post('/api/user/login', data);
export const register = (data: RegisterData) =>
  api.post('/api/user/register', data);
export const getUserData = () => api.get('/api/user');
