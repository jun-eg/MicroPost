import { useContext, useState } from "react";
import { Sign_in } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
import styled from "styled-components";
import { getUser } from "../api/User";

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
      <div className="w-full max-w-lg bg-slate-200 grid grid-cols-2 place-items-stretch p-5 rounded-lg drop-shadow-2xl gap-3 border border-black selection:">
        <label htmlFor="id" className="font-bold truncate">
          ID
        </label>
        <input
          id="id"
          value={userId}
          type="text"
          onChange={(evt) => setUserId(evt.target.value)}
          className="rounded"
        />

        <label htmlFor="password" className="font-bold truncate">
          Password
        </label>
        <input
          id="password"
          value={pass}
          type="password"
          onChange={(evt) => setPass(evt.target.value)}
          className="rounded"
        />
        <button className="bg-sky-400 hover:bg-sky-300 p-1 font-bold rounded-full w-full text-white border-2 truncate border-white">
          SignUp
        </button>

        <button
          onClick={onSignInClick}
          className="bg-sky-400 hover:bg-sky-300 p-1 font-bold rounded-full w-full text-white border-2 truncate border-white"
        >
          SignIn
        </button>
      </div>
    </div>
  );
};

export default SignIn;

const SSignInFrame = styled.div`
  background-color: #f8f8f8;
  margin: 80px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 8px 8px #aaaaaa;
`;

const SSignInRow = styled.div`
  display: inline-block;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const SSignInLabel = styled.span`
  display: inline-block;
  width: 25%;
  vertical-align: top;
  text-align: right;
  margin-right: 4px;
`;

const SSignInInput = styled.span`
  display: inline-block;
  width: auto;
  vertical-align: top;
  margin-left: 4px;
`;

const SLoginButton = styled.button`
  background-color: #444444;
  color: #f0f0f0;
  padding: 4px 16px;
  border-radius: 8px;
`;
