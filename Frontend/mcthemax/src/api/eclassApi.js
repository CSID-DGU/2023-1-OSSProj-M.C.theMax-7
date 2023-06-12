import api from "./index";

export const getLectureInfo = async (data) => {
  let config = {
    headers: { "X-AUTH-TOKEN": data },
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/eclass/lecture/2023`,
    config
  );
  return response.data;
};

export const getAllAssignments = async (data) => {
  let config = {
    headers: { "X-AUTH-TOKEN": data },
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/eclass/assignments/2023`,
    config
  );
  return response.data;
};

export const getAssignment = async (token, data) => {
  let config = {
    headers: { "X-AUTH-TOKEN": token },
  };

  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/eclass/assignment/2023`,
    data,
    config
  );
  return response.data;
};

export const changeAssignmentStatus = async (data, token) => {
  let config = {
    headers: { "X-AUTH-TOKEN": token },
  };

  const response = await api.patch(
    `${process.env.REACT_APP_SERVER_URL}/assignment/move`,
    data,
    config
  );
  return response;
};
