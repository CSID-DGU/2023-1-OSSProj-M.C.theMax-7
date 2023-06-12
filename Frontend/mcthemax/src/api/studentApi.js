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
    headers: { "X-AUTH-TOKEN": data },
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/studentLecture/2023`,
    config
  );
  return response;
};

export const getAssignmentApi = async (data) => {
  let config = {
    headers: { "X-AUTH-TOKEN": data },
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/assignment/2023`,
    config
  );
  return response;
};

export const getNotices = async () => {
  const response = await api.get(
    "https://7r320ngo26.execute-api.ap-northeast-2.amazonaws.com/dev/call"
  );
  return response;
};
