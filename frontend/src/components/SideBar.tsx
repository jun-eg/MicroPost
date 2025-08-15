import { useContext, useState } from "react";
import { UserContext } from "../provider/UserProvider";
import { getListResultType, getPostList, post } from "../api/Post";
import { PostListContext } from "../provider/PostListProvider";

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
    <div>
      <div>hoge</div>
      <div>hoge@example.com</div>

      <div>
        <textarea
          rows={4}
          value={msg}
          onChange={(evt) => setMsg(evt.target.value)}
        ></textarea>
      </div>

      <div>
        <button onClick={onSendClick}>送信</button>
      </div>
    </div>
  );
};

export default SideBar;
