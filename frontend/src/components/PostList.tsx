import { useContext, useEffect } from "react";
import Post from "./Post";
import { UserContext } from "../provider/UserProvider";
import { getListResultType, getPostList } from "../api/Post";
import { PostListContext } from "../provider/PostListProvider";
import styled from "styled-components";

const PostList = () => {
  const { postList, setPostList } = useContext(PostListContext);
  const { userInfo } = useContext(UserContext);

  const getList = async () => {
    const posts = await getPostList(userInfo.token);
    console.log(posts);

    let postList: Array<getListResultType> = [];

    if (posts) {
      posts.forEach((p: getListResultType) => {
        postList.push({
          id: p.id,
          user_name: p.user_name,
          content: p.content,
          created_at: new Date(p.created_at),
        });
      });
    }

    setPostList(postList);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <SPostList>
      {postList.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </SPostList>
  );
};

export default PostList;

const SPostList = styled.div`
  margin-top: 16px;
  height: 100%;
  overflow-y: scroll;
`;
