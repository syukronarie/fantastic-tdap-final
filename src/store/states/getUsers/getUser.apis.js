/* eslint-disable import/prefer-default-export */
import { axiosInstance } from '../../../configs/apis';

export const apiGetUser = () => {
  return axiosInstance.get('/user');
};
