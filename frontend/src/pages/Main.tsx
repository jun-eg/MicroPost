import Layout from "../components/Layout";
import { PostListProvider } from "../provider/PostListProvider";

const Main = () => {
  return (
    <PostListProvider>
      <Layout />
    </PostListProvider>
  );
};

export default Main;
