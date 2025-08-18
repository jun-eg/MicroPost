import axios from "axios";

type User = {
  id: number;
  name: string;
  hash: string;
  umail: string;
  created_at?: Date;
  updated_at?: Date;
};

export const getUser = async (
  user_id: number,
  token: string
): Promise<User> => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/user/${user_id}?token=${token}`;
  const res = await axios.get<User>(url);
  return res.data;
};
