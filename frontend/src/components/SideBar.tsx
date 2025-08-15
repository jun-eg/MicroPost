import { useContext, useState } from "react";
import { UserContext } from "../provider/UserProvider";
import { post } from "../api/Post";

const SideBar = () => {
  const [msg, setMsg] = useState("");
  const { userInfo } = useContext(UserContext);
  const onSendClick = () => {
    post(String(userInfo.id), userInfo.token, msg);
  };

  return (
    <div>
      <div>hoge</div>
      <div>hoge@example.com</div>

      <div>
        <textarea
          rows={4}
          value={msg}
          onChange={(evt) => setMsg(evt.target.value)}
        ></textarea>
      </div>

      <div>
        <button onClick={onSendClick}>送信</button>
      </div>
    </div>
  );
};

export default SideBar;
