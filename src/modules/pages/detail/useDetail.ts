import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatchType, RootStateType } from 'store';
import { swapi } from 'store/swapi';
import { getPersonThunk } from 'store/swapi/thunks';

export const useDetail = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();
  const { id } = useParams();

  const selector = useSelector((state: RootStateType) => state);
  const getPersonState = selector.swapi.getPerson;

  const onBackClickHandler = () => {
    navigate('/');
  };

  useEffect(() => {
    if (id) {
      dispatch(getPersonThunk(id));
    }
  }, [dispatch, id]);

  useEffect(
    () => () => {
      dispatch(swapi.getPeople.action.reset());
    },
    [dispatch],
  );

  return { onBackClickHandler, getPersonState };
};
