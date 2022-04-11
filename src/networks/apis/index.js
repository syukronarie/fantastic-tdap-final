import axios from "axios";
import CONST from "../../utils/constants";

const { baseApi } = CONST;

const config = {
  baseURL: baseApi,
  headers: {
    "app-id": "624a11d46b0e26728639c458",
  },
};

export const axiosInstance = axios.create(config);
