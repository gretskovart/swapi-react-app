import { notification } from 'antd';

export const getParams = (page: number, search: string) => ({
  ...(search ? { search, page } : { page }),
});

export const showErrorNotification = (description?: string) => {
  notification.error({
    message: 'Error',
    description,
  });
};
