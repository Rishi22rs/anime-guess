import axios from "axios";

const API = `http://localhost:6699/api`;

export const getData = async (endpoint) => {
  return axios
    .get(`${API}/${endpoint}`)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export const postData = async (data, endpoint) => {
  return axios
    .post(`${API}/${endpoint}`, data)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
