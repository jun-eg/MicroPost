import Header from "./Header";
import PostList from "./PostList";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-4 border-gray-300 border-b-4">
        <Header />
      </div>

      <div className="col-span-1 border-gray-300  border-r-4">
        <SideBar />
      </div>

      <div className="col-span-3">
        <PostList />
      </div>
    </div>
  );
};

export default Layout;
