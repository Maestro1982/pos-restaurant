import axios, { AxiosResponse } from 'axios';

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

interface TableData {
  _id: string;
  tableNr: string;
  seats: number;
  status: string;
}

interface UpdateTableData {
  _id: string;
  status: string; // 'Available' or 'Booked'
  currentOrder?: {
    customerDetails: {
      name: string;
      phone: string;
      guests: number;
    };
  };
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: TableData; // If the response contains any data
}

// API Endpoints
export const login = (data: AuthData) => api.post('/api/user/login', data);
export const register = (data: RegisterData) =>
  api.post('/api/user/register', data);
export const getUserData = () => api.get('/api/user');
export const logout = () => api.post('/api/user/logout');
export const addTable = (data: TableData) => api.post('/api/table', data);
export const getTables = () => api.get('/api/table');
export const updateTable = (
  data: UpdateTableData
): Promise<AxiosResponse<ApiResponse>> =>
  api.put(`/api/table/${data._id}`, data);
