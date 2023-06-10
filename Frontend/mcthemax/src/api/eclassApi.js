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

export const getAssignment = async (data, id) => {
  let config = {
    headers: { "X-AUTH-TOKEN": data },
  };

  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/eclass/assignment/2023`,
    id,
    config
  );
  return response.data;
};
