import axios from "axios";

export type getListResultType = {
  id: number;
  user_id: number;
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

export const post = async (token: string, msg: string) => {
  const data = {
    message: msg,
  };

  const url = `${process.env.REACT_APP_BACKEND_URL}/post?token=${token}`;
  await axios.post(url, data);
};

export const deletePost = async (token: string, id: number) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/post?token=${token}&id=${id}`;
  await axios.delete(url);
};
