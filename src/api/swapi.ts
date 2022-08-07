import { SwapiApiService } from './swapiApi';
import { REQUEST_HEADERS, SWAPI_URL } from 'shared/constants';

export const swapiApi = new SwapiApiService({
  baseURL: SWAPI_URL,
  headers: REQUEST_HEADERS,
});
