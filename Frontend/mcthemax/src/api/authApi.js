import api from "./index";

export const LoginApi = async (data) => {
  try {
    const response = await api.post(
      `${process.env.REACT_APP_SERVER_URL}/signin`,
      data
    );
    return response;
  } catch (e) {
    if (e) {
      return e.response;
    }
  }
};

export const LogoutApi = async () => {
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/signout`
  );

  return response;
};
