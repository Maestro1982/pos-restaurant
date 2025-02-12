import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../https';
import { setUser } from '../../redux/slices/userSlice';

interface AuthData {
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  const loginMutation = useMutation({
    mutationFn: (reqData: AuthData) => login(reqData),
    onSuccess: (res) => {
      const { data } = res;
      const { _id, name, email, phone, role } = data.data;
      dispatch(setUser({ _id, name, email, phone, role }));
      navigate('/');
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      if (error.response) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' });
      } else {
        enqueueSnackbar('An unexpected error occurred', { variant: 'error' });
      }
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='block text-sm text-[#ababab] mb-2 font-medium mt-3'>
            Employee Email
          </label>
          <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
            <input
              type='email'
              name='email'
              placeholder='Enter employee email'
              className='flex-1 bg-transparent text-white focus:outline-none'
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label className='block text-sm text-[#ababab] mb-2 font-medium mt-3'>
            Password
          </label>
          <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
            <input
              type='password'
              name='password'
              placeholder='Enter password'
              className='flex-1 bg-transparent text-white focus:outline-none'
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          type='submit'
          className='w-full mt-6 py-3 text-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg cursor-pointer transition-colors'
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
export default Login;
