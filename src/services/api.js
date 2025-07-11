import axiosInstance from "./axios";

export const registation = (payload) => {
  return axiosInstance.post("user/create", payload);
};

export const createToken = (payload) => {
  return axiosInstance.post("user/create/token", payload);
};

export const createChannelApi = (payload) => {
  return axiosInstance.post("user/create/channel", payload);
};

export const addChatUserApi = (payload) => {
  return axiosInstance.post("user/chat/add-user", payload);
};
export const chatStartWithUser = (payload) => {
  return axiosInstance.post("user/chat/start-chat", payload);
};

chatStartWithUser;
