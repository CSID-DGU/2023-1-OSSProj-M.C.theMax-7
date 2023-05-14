import api from "./index";

export const getStudentInfoApi = async (data) => {
  let config = {
    headers: data,
  };

  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/`,
    null,
    config
  );
  return response;
};

export const getClassApi = async (data) => {
  let config = {
    headers: data,
  };
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/studentLecture`,
    null,
    config
  );
  return response;
};

export const getAssignmentApi = async (data) => {
  let config = {
    headers: data,
  };
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/`,
    null,
    config
  );
  return response;
};
