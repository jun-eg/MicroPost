import { useNavigate } from "react-router-dom";
import NormalButton from "./Button";
import { useState } from "react";
import { createUser } from "../api/User";

const SignUpLayout = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [pass, setPass] = useState<string>();

  const onSignUpClick = async () => {
    if (userName && email && pass) {
      await createUser(userName, email, pass);
      navigate("/");
    } else {
      alert("未入力の項目があります");
    }
  };
  return (
    <div className="flex justify-center m-20">
      <div className="w-full max-w-lg bg-slate-200 grid grid-cols-2 place-items-stretch p-5 rounded-lg drop-shadow-2xl gap-3 border-4 border-gray-300 selection:">
        <label htmlFor="name" className="font-bold truncate">
          UserName
        </label>
        <input
          id="name"
          value={userName}
          type="text"
          onChange={(evt) => setUserName(evt.target.value)}
          className="rounded border-2 border-gray-300"
        />

        <label htmlFor="Email" className="font-bold truncate">
          Email
        </label>
        <input
          id="Email"
          value={email}
          type="email"
          onChange={(evt) => setEmail(evt.target.value)}
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
        <NormalButton text={"Back"} click={() => navigate("/")}></NormalButton>
        <NormalButton text={"SignUp"} click={onSignUpClick}></NormalButton>
      </div>
    </div>
  );
};

export default SignUpLayout;
