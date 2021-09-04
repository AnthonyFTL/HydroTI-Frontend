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
