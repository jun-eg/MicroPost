import { useContext, useState } from "react";
import { Sign_in } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";

const SignIn = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const { setUserInfo } = useContext(UserContext);

  const onSignInClick = async () => {
    const ret = await Sign_in(userId, pass);
    console.log("onSignIn", ret);

    if (ret && ret.token) {
      setUserInfo({
        id: ret.user_id,
        token: ret.token,
      });
      navigate("/main");
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="id">ID</label>
        <input
          id="id"
          type="text"
          value={userId}
          onChange={(evt) => setUserId(evt.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          value={pass}
          onChange={(evt) => setPass(evt.target.value)}
        />
      </div>

      <div>
        <button type="button" onClick={onSignInClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
