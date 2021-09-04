export const saveUserDetails = (userDetails) => {
  const userDetailsStr = JSON.stringify(userDetails);
  sessionStorage.setItem("userDetails", userDetailsStr);
};

const getUserDetails = () => {
  const userDetailsStr = sessionStorage.getItem("userDetails");
  return JSON.parse(userDetailsStr);
};

export const getUserToken = () => getUserDetails()?.token;

export const getUsername = () => getUserDetails()?.username;
