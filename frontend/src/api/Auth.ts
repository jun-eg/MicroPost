import axios from "axios";

type Ret = {
  token: string;
  user_id: number;
};

export const Sign_in = async (user_id: string, pass: string): Promise<Ret> => {
  const url = `http://localhost:3001/auth?user_id=${user_id}&password=${pass}`;
  console.log(url);
  const res = await axios.get<Ret>(url);
  console.log(res.data);
  return res.data;
};
