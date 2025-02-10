import { useState } from 'react';

import { roles } from '../../constants/constants';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'Cashier',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelection = (selectedRole: string) => {
    setFormData({ ...formData, role: selectedRole });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='block text-sm text-[#ababab] mb-2 font-medium'>
            Employee Name
          </label>
          <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
            <input
              type='text'
              name='name'
              placeholder='Enter employee name'
              className='flex-1 bg-transparent text-white focus:outline-none'
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
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
            Employee Phone
          </label>
          <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
            <input
              type='number'
              name='phone'
              placeholder='Enter employee phone'
              className='flex-1 bg-transparent text-white focus:outline-none'
              required
              value={formData.phone}
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
        <div>
          <label className='block text-sm text-[#ababab] mb-2 font-medium mt-3'>
            Choose your role
          </label>
          <div className='flex items-center gap-3 mt-4'>
            {roles.map((role) => (
              <button
                key={role}
                type='button'
                className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] cursor-pointer ${
                  formData.role === role ? 'bg-blue-500 text-gray-200' : ''
                }`}
                onClick={() => handleRoleSelection(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <button
          type='submit'
          className='w-full mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold rounded-lg cursor-pointer'
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
