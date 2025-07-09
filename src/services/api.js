import axiosInstance from "./axios";

export const registation = (payload) => {
  return axiosInstance.post("user/create", payload);
};
