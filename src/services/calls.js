import api from './api';

export const getUserInfoCall = async username => {
  try {
    const response = await api.get(`/${username}`);
    const data = response.data;

    return data;
  } catch (error) {
    console.log({ error });

    return error;
  }
};
