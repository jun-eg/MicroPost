import { useContext, useState } from "react";
import { UserContext } from "../provider/UserProvider";
import { getListResultType, getPostList, post } from "../api/Post";
import { PostListContext } from "../provider/PostListProvider";
import styled from "styled-components";

const SideBar = () => {
  const [msg, setMsg] = useState("");
  const { userInfo } = useContext(UserContext);
  const { setPostList } = useContext(PostListContext);

  const onSendClick = async () => {
    await post(String(userInfo.id), userInfo.token, msg);
    await getPost();
  };

  const getPost = async () => {
    const posts = await getPostList(userInfo.token);
    console.log(posts);
    let postList: Array<getListResultType> = [];

    if (posts) {
      console.log(posts);
      posts.forEach((p: any) => {
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

  return (
    <SSideBar>
      <SSideBarRow>hoge</SSideBarRow>
      <SSideBarRow>hoge@example.com</SSideBarRow>

      <SSideBarRow>
        <SSideBarTextArea
          rows={4}
          value={msg}
          onChange={(evt) => setMsg(evt.target.value)}
        ></SSideBarTextArea>
      </SSideBarRow>

      <SSideBarRow>
        <SSideBarButton onClick={onSendClick}>送信</SSideBarButton>
      </SSideBarRow>
    </SSideBar>
  );
};

export default SideBar;

const SSideBar = styled.div`
  padding: 8px;
`;

const SSideBarRow = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  text-align: left;
`;

const SSideBarTextArea = styled.textarea`
  border-radius: 4px;
  box-shadow: inset 0 2px 4px #cccccc;
`;

const SSideBarButton = styled.button`
  background-color: #222222;
  padding: 4px;
  border-radius: 8px;
  color: #fafafa;
  width: 100%;
`;
