import { AppThunkType } from 'store';
import { swapi } from 'store/swapi';
import { StatusEnum } from 'shared/types';
import { showErrorNotification } from 'shared/utils';

export const getPersonThunk =
  (id: string): AppThunkType =>
  async (dispatch, getState) => {
    await dispatch(swapi.getPerson.thunk.request(id));

    const state = getState();
    const { error, status } = state.swapi.getPerson;

    if (status === StatusEnum.Failed) {
      showErrorNotification(error?.message);
    }
  };
