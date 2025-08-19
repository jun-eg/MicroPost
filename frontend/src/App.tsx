import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import { UserProvider } from "./provider/UserProvider";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
