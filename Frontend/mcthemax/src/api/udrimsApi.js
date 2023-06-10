import api from "./index";

export const udrimsAuth = async (data) => {
  let config = {
    headers: { "X-AUTH-TOKEN": data },
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/udrims/auth`,
    config
  );
  return response;
};

export const getInfo = async (data) => {
  let config = {
    headers: { "X-AUTH-TOKEN": data },
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/udrims/info`,
    config
  );
  return response;
};

export const getTimeTable = async (data) => {
  let config = {
    headers: { "X-AUTH-TOKEN": data },
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/udrims/timetable`,
    null,
    config
  );
  return response;
};

export const getGrade = async (data) => {
  let config = {
    headers: { "X-AUTH-TOKEN": data },
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/udrims/score`,
    null,
    config
  );
  return response;
};
