import React, { ReactNode, useContext } from "react";
import { deletePost, getListResultType } from "../api/Post";
import { UserContext } from "../provider/UserProvider";
import NormalButton from "./Button";
import { PostListContext } from "../provider/PostListProvider";

type postProps = {
  post: getListResultType;
};

const Post = (props: postProps) => {
  const { post } = props;
  const { userInfo } = useContext(UserContext);
  const { postList, setPostList } = useContext(PostListContext);

  const getDateStr = () => {
    const year = post.created_at.getFullYear();
    const month = post.created_at.getMonth() + 1;
    const date = post.created_at.getDate();
    const hour = post.created_at.getHours();
    const min = post.created_at.getMinutes();
    const sec = post.created_at.getSeconds();
    return `${year}年${month}月${date}日 ${hour}時${min}分${sec}秒`;
  };

  const getLines = (src: string): ReactNode => {
    return src.split("\n").map((line, index) => {
      return (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      );
    });
  };

  const deleteChain = async (id: number) => {
    await deletePost(userInfo.token, post.id);

    const newPostList = postList.filter((post) => post.id !== id);
    setPostList(newPostList);
  };

  return (
    <div className="grid grid-cols-6 bg-slate-200 rounded-lg w-full border-2 border-gray-300">
      <div className="col-span-1 font-bold text-sky-400/75 underline underline-offset-4 truncate">
        {post.user_name}
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-2 font-bold text-sky-400/75  underline underline-offset-4 truncate">
        {getDateStr()}
      </div>
      {post.user_id === userInfo.id && (
        <div className="col-span-1">
          <NormalButton
            text="消去"
            click={() => deleteChain(post.id)}
          ></NormalButton>
        </div>
      )}
      <div className="p-2 col-span-6">{getLines(post.content)}</div>
    </div>
  );
};

export default Post;
