import { useContext } from "react";
import Layout from "../components/Layout";
import { PostListProvider } from "../provider/PostListProvider";
import { UserContext } from "../provider/UserProvider";
import { Navigate } from "react-router-dom";

const Main = () => {
  const { userInfo } = useContext(UserContext);
  const loggedIn = userInfo.token !== "";
  return (
    <PostListProvider>
      {loggedIn ? <Layout /> : <Navigate replace to="/" />}
    </PostListProvider>
  );
};

export default Main;
