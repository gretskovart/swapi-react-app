import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IPerson, IParams, ResponseDataWithPagination } from 'api/swapiApi';
import { swapiApi } from 'api';
import { StatusEnum, StatusType } from 'shared/types';

const SLICE_NAME = '@people';

const initialState: {
  status: StatusType;
  data: null | ResponseDataWithPagination<IPerson>;
  error: null | AxiosError;
} = {
  status: null,
  data: null,
  error: null,
};

const requestThunk = createAsyncThunk(
  `${SLICE_NAME}/request`,
  (params: IParams, { rejectWithValue }) =>
    swapiApi.getPeople(params).catch(rejectWithValue),
);

const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestThunk.pending, (state) => {
      state.status = StatusEnum.Loading;
    });
    builder.addCase(requestThunk.fulfilled, (state, action) => {
      state.data = action.payload || null;
      state.status = StatusEnum.Success;
    });
    builder.addCase(requestThunk.rejected, (state, action) => {
      state.status = StatusEnum.Failed;
      state.error = action.payload as AxiosError;
    });
  },
});

export const getPeople = {
  action: actions,
  thunk: {
    request: requestThunk,
  },
  reducer,
};
