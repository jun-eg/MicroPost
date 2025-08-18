import Header from "./Header";
import PostList from "./PostList";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-4 border-black border-b">
        <Header />
      </div>

      <div className="col-span-1 border-black  border-r">
        <SideBar />
      </div>

      <div className="col-span-3">
        <PostList />
      </div>
    </div>
  );
};

export default Layout;
