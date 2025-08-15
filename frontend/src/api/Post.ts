import axios from "axios";

export const getList = async (token: string) => {
  const url = `http://localhost:3001/post?token=${token}&records=10`;
  const res = await axios.get(url);
  return res.data;
};
