import { combineReducers } from '@reduxjs/toolkit';

import { getPeople, getPerson } from './slices';

export const swapiReducer = combineReducers({
  getPeople: getPeople.reducer,
  getPerson: getPerson.reducer,
});

export const swapi = { getPeople, getPerson };
