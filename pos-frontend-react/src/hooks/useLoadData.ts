import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserData } from '../https';
import { removeUser, setUser } from '../redux/slices/userSlice';

const useLoadData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUserData();
        const { _id, name, email, phone, role } = data.data;
        dispatch(setUser({ _id, name, email, phone, role }));
        console.log(data);
      } catch (error) {
        dispatch(removeUser());
        navigate('/auth');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  return isLoading;
};

export default useLoadData;
