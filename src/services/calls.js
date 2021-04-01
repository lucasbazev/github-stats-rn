import api from './api';

export const getUserInfoCall = async username => {
  try {
    const result = await api.get('/' + username);
    return result;
  } catch (error) {
    console.log({error: {error}});
    return error;
  }
};
