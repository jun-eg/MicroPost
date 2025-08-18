import axios from "axios";

type Ret = {
  token: string;
  user_id: number;
};

export const Sign_in = async (user_id: string, pass: string): Promise<Ret> => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/auth?user_id=${user_id}&password=${pass}`;
  const res = await axios.get<Ret>(url);
  return res.data;
};
