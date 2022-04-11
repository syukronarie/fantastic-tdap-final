import { axiosInstance } from "../../../networks/apis";

export const apiGetUser = async () => {
  return await axiosInstance.get("/user");
};
