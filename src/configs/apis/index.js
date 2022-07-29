/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import CONST from '../../utils/constants';

const { BASE_URL_API } = CONST;

const config = {
  baseURL: BASE_URL_API,
  headers: {
    'app-id': '624a11d46b0e26728639c458',
  },
};

export const axiosInstance = axios.create(config);
