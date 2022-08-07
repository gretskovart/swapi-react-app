import { AxiosRequestConfig } from 'axios';

import { BaseApiService } from 'api';
import { IParams, IPerson, ResponseDataWithPagination } from './types';

export class SwapiApiService extends BaseApiService {
  constructor(config: AxiosRequestConfig = {}) {
    super(config);
  }

  public getPeople(params: IParams) {
    return this.request<ResponseDataWithPagination<IPerson>>({
      method: 'get',
      url: '/people',
      params,
    });
  }

  public getPerson(id: string) {
    return this.request<IPerson>({
      method: 'get',
      url: `/people/${id}`,
    });
  }
}
