import httpClient from "../../util/httpClient";

export const signUp = async (data) => {
  try {
    await httpClient.post("users", {
      email: data.email,
      password: data.password,
      role: data.role,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const signIn = async (data) => {
  try {
    const response = await httpClient.post("Auth/token", {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
