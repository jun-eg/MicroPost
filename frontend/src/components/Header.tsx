import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
import { getUser } from "../api/User";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const logout = () => {
    setUserInfo({ id: 0, token: "", userName: "", umail: "" });
    navigate("/");
  };

  useEffect(() => {
    const myGetUser = async () => {
      const user = await getUser(userInfo.id, userInfo.token);
      setUserName(user.name);
    };
    myGetUser();
  }, []);

  return (
    <div className=" grid grid-cols-8 bg-slate-200 w-full p-3">
      <div className="col-span-2"></div>
      <div className="col-span-4 font-serif text-xl">MicroPost</div>
      <div className="col-span-1">
        <button
          onClick={logout}
          className="bg-sky-400 hover:bg-sky-300 p-1 font-bold rounded-full w-full text-white border-2 border-white truncate"
        >
          Logout
        </button>
      </div>
      <div className="col-span-1">アイコン</div>
      <div></div>
    </div>
  );
};

export default Header;
