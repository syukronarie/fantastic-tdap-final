import axios from "axios";
import CONST from "../../utils/constants";

const { baseApi } = CONST;

const accessToken = Cookies.get("accessToken");

const config = {
  baseURL: baseApi,
  headers: {
    "app-id": "624a11d46b0e26728639c458",
    "access-token": accessToken
  }
};

export const axiosInstance = axios.create(config);

// getUser.js
const data = {
  firstName: "Duta",
  lastName: "Mahendra"
};

const apiRegister = async (data) => {
  return await axiosInstance.post("/register", data, config);
};

//
useEffect(() => {
  const result = apiRegister(data);
  if (result.data.success) {
    navigate("/home");
  } else {
    showRegisterError(result.data.message);
  }
}, []);
