import { useContext, useState } from "react";
import { Sign_in } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
import styled from "styled-components";

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
    <SSignInFrame>
      <SSignInRow>
        <SSignInLabel>
          <label htmlFor="id">ID</label>
        </SSignInLabel>

        <SSignInInput>
          <input
            id="id"
            value={userId}
            type="text"
            onChange={(evt) => setUserId(evt.target.value)}
          />
        </SSignInInput>
      </SSignInRow>

      <SSignInRow>
        <SSignInLabel>
          <label htmlFor="password">Password</label>
        </SSignInLabel>

        <SSignInInput>
          <input
            id="password"
            value={pass}
            type="password"
            onChange={(evt) => setPass(evt.target.value)}
          />
        </SSignInInput>
      </SSignInRow>

      <SSignInRow>
        <SLoginButton type="button" onClick={onSignInClick}>
          Login
        </SLoginButton>
      </SSignInRow>
    </SSignInFrame>
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
