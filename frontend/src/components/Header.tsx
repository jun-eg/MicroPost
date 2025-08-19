import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
import { getUser } from "../api/User";
import NormalButton from "./Button";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [, setUserName] = useState("");
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
        <NormalButton text="Logout" click={logout}></NormalButton>
      </div>
      <div className="col-span-1">アイコン</div>
      <div></div>
    </div>
  );
};

export default Header;
