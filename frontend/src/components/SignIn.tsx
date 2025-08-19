import { useContext, useState } from "react";
import { Sign_in } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
import { getUser } from "../api/User";
import NormalButton from "./Button";

const SignIn = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const { setUserInfo } = useContext(UserContext);

  const onSignInClick = async () => {
    try {
      const ret = await Sign_in(userId, pass);
      const user = await getUser(ret.user_id, ret.token);

      if (ret && ret.token && user) {
        setUserInfo({
          id: ret.user_id,
          token: ret.token,
          userName: user.name,
          umail: user.umail,
        });
        navigate("/main");
      }
    } catch (error) {
      alert("IDもしくは、Passが無効です");
    }
  };
  return (
    <div className="flex justify-center m-20">
      <div className="w-full max-w-lg bg-slate-200 grid grid-cols-2 place-items-stretch p-5 rounded-lg drop-shadow-2xl gap-3 border-4 border-gray-300 selection:">
        <label htmlFor="id" className="font-bold truncate">
          ID
        </label>
        <input
          id="id"
          value={userId}
          type="text"
          onChange={(evt) => setUserId(evt.target.value)}
          className="rounded border-2 border-gray-300"
        />

        <label htmlFor="password" className="font-bold truncate">
          Password
        </label>
        <input
          id="password"
          value={pass}
          type="password"
          onChange={(evt) => setPass(evt.target.value)}
          className="rounded border-2 border-gray-300"
        />

        <NormalButton
          text={"SignUp"}
          click={() => navigate("/signup")}
        ></NormalButton>
        <NormalButton text={"SignIn"} click={onSignInClick}></NormalButton>
      </div>
    </div>
  );
};

export default SignIn;
