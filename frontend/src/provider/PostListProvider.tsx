import { createContext, useState } from "react";
import { getListResultType } from "../api/Post";

type PostListContextType = {
  postList: getListResultType[];
  setPostList: React.Dispatch<React.SetStateAction<getListResultType[]>>;
};

export const PostListContext = createContext<PostListContextType>({
  postList: [],
  setPostList: () => {},
});

export const PostListProvider = (props: any) => {
  const { children } = props;
  const [postList, setPostList] = useState<getListResultType[]>([]);

  return (
    <PostListContext.Provider value={{ postList, setPostList }}>
      {children}
    </PostListContext.Provider>
  );
};
