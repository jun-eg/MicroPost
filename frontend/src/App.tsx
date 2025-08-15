import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import { UserProvider } from "./provider/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
