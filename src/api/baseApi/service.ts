import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class BaseApiService {
  private readonly axiosInstance: AxiosInstance;

  protected constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }

  public axios(): AxiosInstance {
    return this.axiosInstance;
  }

  protected request<T>(options: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.request(options).then(
      (response) => Promise.resolve(response.data),
      (error) => Promise.reject(error),
    );
  }
}
