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
    let postList: Array<getListResultType> = [];

    if (posts) {
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
    setMsg("");
  };

  return (
    <div className="flex flex-col p-2 gap-2">
      <div className="font-bold truncate">{userInfo.userName}</div>
      <div className="font-bold truncate">{userInfo.umail}</div>
      <textarea
        rows={4}
        value={msg}
        onChange={(evt) => setMsg(evt.target.value)}
        className="border border-black"
      ></textarea>
      <button
        onClick={onSendClick}
        className="bg-sky-400 hover:bg-sky-300 p-1 font-bold rounded-full w-full text-white border-2 truncate border-white"
      >
        Post
      </button>
    </div>
  );
};

export default SideBar;
