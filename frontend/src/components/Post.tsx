import React, { ReactNode } from "react";
import { getListResultType } from "../api/Post";

type postProps = {
  post: getListResultType;
};

const Post = (props: postProps) => {
  const { post } = props;

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

  return (
    <div className="grid grid-cols-3 bg-slate-200 rounded-lg w-full border-2 border-gray-300">
      <div className="col-span-1 font-bold text-sky-400/75 underline underline-offset-4 truncate">
        {post.user_name}
      </div>
      <div className="col-span-2 font-bold text-sky-400/75  underline-offset-4 truncate">
        {getDateStr()}
      </div>
      <div className="p-2 col-span-3">{getLines(post.content)}</div>
    </div>
  );
};

export default Post;
