import httpClient from "../../util/httpClient";

export const signUp = async (email, password, role) => {
  try {
    await httpClient.post("users", {
      email,
      password,
      role,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await httpClient.post("Auth/token", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
