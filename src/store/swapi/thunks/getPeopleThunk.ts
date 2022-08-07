import { AppThunkType } from 'store';
import { swapi } from 'store/swapi';
import { IParams } from 'api/swapiApi';
import { StatusEnum } from 'shared/types';
import { showErrorNotification } from 'shared/utils';

export const getPeopleThunk =
  (params: IParams): AppThunkType =>
  async (dispatch, getState) => {
    await dispatch(swapi.getPeople.thunk.request(params));

    const state = getState();
    const { error, status } = state.swapi.getPeople;

    if (status === StatusEnum.Failed) {
      showErrorNotification(error?.message);
    }
  };
