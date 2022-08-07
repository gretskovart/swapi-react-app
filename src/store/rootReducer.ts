import { combineReducers } from '@reduxjs/toolkit';

import { swapiReducer } from './swapi';

export const rootReducer = combineReducers({
  swapi: swapiReducer,
});
