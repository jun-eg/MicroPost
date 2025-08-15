import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
