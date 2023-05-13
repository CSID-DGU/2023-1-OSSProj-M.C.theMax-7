import api from "./index";

export const LoginApi = async (data) => {
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/signin`,
    data
  );
  console.log(response);
  return response.data;
};

export const LogoutApi = async (data) => {
  let config = {
    headers: data,
  };

  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/logout`,
    null,
    config
  );

  return response;
};
