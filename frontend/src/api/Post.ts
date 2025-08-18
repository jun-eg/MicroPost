import axios from "axios";

export type getListResultType = {
  id: number;
  content: string;
  user_name: string;
  created_at: Date;
};

export const getPostList = async (
  token: string
): Promise<getListResultType[]> => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/post?token=${token}&records=10`;
  const res = await axios.get<getListResultType[]>(url);
  return res.data;
};

export const post = async (user_id: string, token: string, msg: string) => {
  const data = {
    message: msg,
  };

  const url = `${process.env.REACT_APP_BACKEND_URL}/post?user_id=${user_id}&token=${token}`;
  const res = await axios.post(url, data);
  console.log(res.status);
};
